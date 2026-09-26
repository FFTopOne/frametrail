"""Deterministic differential tests against a delimiter-based Python oracle.

Unlike the incremental decoder, this oracle sees whole packets. It checks every
event, offset, payload, statistic and process exit across varied chunk sizes.
"""
import binascii
import json
import random

from verify_reference import reference_cobs_decode, run, wire


def expected_report(data, limit):
    events = []
    empty = peak = start = 0
    segments = data.split(b'\0')
    for index, segment in enumerate(segments):
        terminated = index < len(segments) - 1
        end = start + len(segment) + int(terminated)
        peak = max(peak, min(len(segment), limit))
        code = None
        payload = None
        if len(segment) > limit:
            code = 'OVERSIZE'
            event_end = start + limit + 1
        elif not terminated:
            if segment:
                code = 'TRUNCATED'
            event_end = end
        elif not segment:
            empty += 1
            event_end = end
        else:
            event_end = end
            try:
                raw = reference_cobs_decode(segment)
            except AssertionError:
                code = 'MALFORMED_COBS'
            else:
                if len(raw) < 2:
                    code = 'MISSING_CHECKSUM'
                elif binascii.crc_hqx(raw[:-2], 0xffff) != int.from_bytes(raw[-2:], 'big'):
                    code = 'CRC_MISMATCH'
                else:
                    payload = raw[:-2]
        if code:
            events.append(dict(type='rejected', start=str(start), end=str(event_end), code=code))
        elif payload is not None:
            events.append(dict(type='frame', start=str(start), end=str(event_end), payload_hex=payload.hex().upper(), payload_bytes=len(payload)))
        start = end
    rejected = sum(e['type'] == 'rejected' for e in events)
    return dict(profile='frametrail-cobs-crc16-v1', events=events, stats=dict(
        bytes_in=str(len(data)), frames=str(len(events) - rejected), rejected=str(rejected),
        empty_delimiters=str(empty), peak_buffered=peak))


def main():
    rng = random.Random(20260926)
    cases = [(b'', 1), (b'\0\0', 4), (b'\1\0\5\x11\0\4A\1\1\0\2\x11', 8)]
    for size in [0, 1, 253, 254, 255, 508]:
        packet = wire(bytes([0x71]) * size)
        for limit in [max(1, len(packet) - 2), len(packet) - 1, len(packet)]:
            cases.append((packet + b'\0' + packet[:-1], limit))
    for _ in range(30):
        parts = []
        for _ in range(12):
            packet = bytearray(wire(rng.randbytes(rng.randrange(0, 70))))
            operation = rng.randrange(5)
            if operation == 0:
                packet[rng.randrange(len(packet) - 1)] ^= 1 << rng.randrange(8)
            elif operation == 1:
                packet.insert(rng.randrange(len(packet)), 0)
            elif operation == 2:
                del packet[rng.randrange(len(packet))]
            elif operation == 3:
                packet.extend(b'\0\0')
            parts.append(bytes(packet))
        data = b''.join(parts)
        cases.append((data[:rng.randrange(max(1, len(data) - 20), len(data) + 1)], rng.choice([1, 8, 32, 128])))
    seen = set()
    for index, (data, limit) in enumerate(cases):
        expected = expected_report(data, limit)
        seen.update(e['code'] for e in expected['events'] if e['type'] == 'rejected')
        for chunk in [1, 7, 4096]:
            actual = json.loads(run('decode', data.hex(), str(chunk), str(limit), code=int(expected['stats']['rejected'] != '0')))
            assert actual == expected, f'oracle mismatch: seed=20260926 case={index} chunk={chunk} limit={limit}'
    assert seen == {'OVERSIZE', 'TRUNCATED', 'MALFORMED_COBS', 'MISSING_CHECKSUM', 'CRC_MISMATCH'}, seen
    print(f'PASS: {len(cases)} independent stream cases x 3 chunk sizes; all five offline fault classes, exact offsets and statistics.')


if __name__ == '__main__':
    main()
