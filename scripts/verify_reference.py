"""Independent wire-format and real-process checks; Python stdlib only.

Run after `moon build --target js --release` from the repository root.
This script is a test harness, not part of the implementation.
"""
import binascii
import json
from pathlib import Path
import subprocess
import sys
import tempfile

ROOT = Path(__file__).resolve().parents[1]
CLI = ROOT / '_build/js/release/build/cmd/main/main.js'
if len(sys.argv) > 1:
    CLI = Path(sys.argv[1]).resolve()

def run(*args, code=0):
    result = subprocess.run(['node', str(CLI), *args], capture_output=True, text=True, encoding='utf-8', cwd=ROOT)
    assert result.returncode == code, (args, result.returncode, result.stdout, result.stderr)
    return result.stdout.strip()

def reference_cobs_decode(encoded):
    # Independent block-slicing implementation, not ported from MoonBit.
    decoded = bytearray()
    pos = 0
    while pos < len(encoded):
        count = encoded[pos]
        assert count and pos + count <= len(encoded)
        block = encoded[pos + 1:pos + count]
        assert 0 not in block
        decoded.extend(block)
        pos += count
        if count != 255 and pos < len(encoded):
            decoded.append(0)
    return bytes(decoded)

def reference_cobs_encode(data):
    # Split on zero, then split each nonzero span into 254-byte blocks.
    out = bytearray()
    for span in data.split(b'\0'):
        while len(span) >= 254:
            out.extend(b'\xff' + span[:254])
            span = span[254:]
        out.extend(bytes([len(span) + 1]) + span)
    return bytes(out)

def wire(payload):
    crc = binascii.crc_hqx(payload, 0xffff).to_bytes(2, 'big')
    return reference_cobs_encode(payload + crc) + b'\0'

def main():
    lengths = [0, 1, 2, 3, 16, 31, 128, 253, 254, 255, 256, 508, 509, 1024, 2048]
    for n in lengths:
        payload = bytes((i * 71 + n * 11) % 256 for i in range(n))
        encoded = bytes.fromhex(run('encode', payload.hex()))
        assert encoded == wire(payload)
        raw = reference_cobs_decode(encoded[:-1])
        assert raw[:-2] == payload
        assert int.from_bytes(raw[-2:], 'big') == binascii.crc_hqx(payload, 0xffff)
        report = json.loads(run('decode', wire(payload).hex(), '7'))
        assert report['events'][0]['payload_hex'] == payload.hex().upper()
    good = wire(b'OK')
    clean = json.loads(run('decode', (good * 2).hex(), '1'))
    assert clean['stats']['frames'] == '2'
    mixed = b'\x05\x11\0' + good + b'\x04\x41\x01\x01\0' + good + b'\x02\x11'
    a = json.loads(run('decode', mixed.hex(), '1', code=1))
    b = json.loads(run('decode', mixed.hex(), '4096', code=1))
    assert a == b
    assert [e.get('code') for e in a['events'] if e['type'] == 'rejected'] == ['MALFORMED_COBS', 'CRC_MISMATCH', 'TRUNCATED']
    demo = json.loads(run('demo', code=1))
    assert demo['stats']['frames'] == '2' and demo['stats']['rejected'] == '1'
    for args in [('decode', '1'), ('decode', 'GG'), ('decode', '00', '0'),
                 ('decode', '00', 'x'), ('decode', '00', '9999999999999999999999'),
                 ('decode', '00', '1', '0'), ('decode', '00', '1', '1048577'),
                 ('unknown', '00'), ('encode', '00', 'extra'), ('replay', '__missing__.hex')]:
        assert 'error' in json.loads(run(*args, code=2))
    with tempfile.TemporaryDirectory() as directory:
        path = Path(directory) / 'device.hex'
        path.write_text(good.hex() + '\n', encoding='utf-8')
        assert json.loads(run('replay', str(path)))['stats']['frames'] == '1'
        path.write_text('\ufeff' + good.hex() + '\n', encoding='utf-8')
        assert json.loads(run('replay', str(path)))['stats']['frames'] == '1'
        path.write_bytes(b'AA\n G0')
        error = json.loads(run('replay', str(path), code=2))
        assert (error['char_offset'], error['line'], error['column']) == (4, 2, 2)
        path.write_bytes(b'AA\r\n G0')
        error = json.loads(run('replay', str(path), code=2))
        assert (error['char_offset'], error['line'], error['column']) == (5, 2, 2)
        binary = wire(bytes(range(256))) + mixed
        path.write_bytes(binary)
        assert json.loads(run('replay-bin', str(path), '3', code=1)) == json.loads(run('decode', binary.hex(), '17', code=1))
        path.write_bytes(b'\xff')
        assert json.loads(run('replay', str(path), code=2))['error'] == 'hex file must contain valid UTF-8'
        path.write_bytes(b'')
        assert json.loads(run('replay-bin', str(path)))['stats']['bytes_in'] == '0'
        assert 'error' in json.loads(run('replay-bin', directory, code=2))
        path.write_bytes(b'0' * (4194304 + 1))
        assert 'error' in json.loads(run('replay', str(path), code=2))
        assert 'error' in json.loads(run('replay-bin', str(path), code=2))
    assert 'FrameTrail' in run('help')
    print('PASS: 15 independent bidirectional wire vectors; CLI clean/corrupt/error exits; file I/O and size limit; chunk invariance.')

if __name__ == '__main__':
    main()
