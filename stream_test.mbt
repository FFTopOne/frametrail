///|
fn join(parts : Array[Bytes]) -> Bytes {
  let all : Array[Byte] = []
  for part in parts {
    for b in part {
      all.push(b)
    }
  }
  Bytes::from_array(all)
}

///|
test "empty payload is a real frame" {
  let frame = @frametrail.encode_frame(b"")
  let (events, stats) = @frametrail.replay(frame).unwrap()
  assert_eq(events, [
    @frametrail.Frame(start=0L, end=frame.length().to_int64(), payload=b""),
  ])
  assert_eq(stats.frames, 1L)
}

///|
test "golden wire vector has big endian checksum" {
  assert_eq(
    @frametrail.to_hex(@frametrail.encode_frame(b"123456789")),
    "0C31323334353637383929B100",
  )
}

///|
test "concatenated frames and empty delimiters" {
  let a = @frametrail.encode_frame(b"A")
  let stream = join([b"\x00\x00", a, b"\x00", a])
  let (events, stats) = @frametrail.replay(stream, chunk_size=1).unwrap()
  assert_eq(events.length(), 2)
  assert_eq(stats.empty_delimiters, 3L)
  assert_eq(stats.bytes_in, stream.length().to_int64())
  assert_eq(stats.rejected, 0L)
}

///|
test "all split points preserve frame and offset" {
  let stream = join([
    @frametrail.encode_frame(b"\x00\x01abc"),
    @frametrail.encode_frame(b"last"),
  ])
  let (expected, _) = @frametrail.replay(stream).unwrap()
  for cut in 0..<=stream.length() {
    let decoder = @frametrail.Decoder::new().unwrap()
    let events = decoder.feed(stream[:cut].to_owned()).unwrap()
    for e in decoder.feed(stream[cut:].to_owned()).unwrap() {
      events.push(e)
    }
    for e in decoder.finish() {
      events.push(e)
    }
    assert_eq(events, expected)
  }
}

///|
test "malformed packet recovers at next delimiter" {
  let stream = join([b"\x05\x11\x00", @frametrail.encode_frame(b"ok")])
  let (events, stats) = @frametrail.replay(stream).unwrap()
  assert_eq(
    events[0],
    @frametrail.Rejected(start=0L, end=3L, reason=@frametrail.MalformedCobs),
  )
  assert_true(events[1] is @frametrail.Frame(payload=b"ok", ..))
  assert_eq(stats.rejected, 1L)
}

///|
test "bad CRC recovers without losing next frame" {
  let stream = join([b"\x04\x41\x01\x01\x00", @frametrail.encode_frame(b"B")])
  let (events, _) = @frametrail.replay(stream).unwrap()
  assert_true(
    events[0] is @frametrail.Rejected(reason=@frametrail.ChecksumMismatch, ..),
  )
  assert_true(events[1] is @frametrail.Frame(payload=b"B", ..))
}

///|
test "missing checksum classified separately" {
  let (events, _) = @frametrail.replay(b"\x01\x00\x02\x11\x00").unwrap()
  assert_eq(events.length(), 2)
  for e in events {
    assert_true(
      e is @frametrail.Rejected(reason=@frametrail.MissingChecksum, ..),
    )
  }
}

///|
test "oversize bounds storage and resumes after delimiter" {
  let d = @frametrail.Decoder::new(max_encoded=8).unwrap()
  let events = d.feed(Bytes::make(100000, 1)).unwrap()
  assert_eq(events, [
    @frametrail.Rejected(start=0L, end=9L, reason=@frametrail.Oversize),
  ])
  assert_eq(d.buffered(), 0)
  assert_eq(d.stats().peak_buffered, 8)
  let recovered = d
    .feed(join([b"\x00", @frametrail.encode_frame(b"ok")]))
    .unwrap()
  assert_true(
    recovered[0] is @frametrail.Frame(start=100001L, payload=b"ok", ..),
  )
  assert_eq(d.finish(), [])
}

///|
test "packet at encoded limit is accepted" {
  let wire = @frametrail.encode_frame(b"abc")
  let (events, stats) = @frametrail.replay(wire, max_encoded=wire.length() - 1).unwrap()
  assert_true(events[0] is @frametrail.Frame(..))
  assert_eq(stats.peak_buffered, wire.length() - 1)
}

///|
test "packet one above limit rejected once" {
  let wire = @frametrail.encode_frame(b"abc")
  let (events, stats) = @frametrail.replay(wire, max_encoded=wire.length() - 2).unwrap()
  assert_eq(events.length(), 1)
  assert_true(
    events[0] is @frametrail.Rejected(reason=@frametrail.Oversize, ..),
  )
  assert_eq(stats.rejected, 1L)
}

///|
test "finish truncated is idempotent and closes session" {
  let d = @frametrail.Decoder::new().unwrap()
  assert_eq(d.feed(b"\x02\x11").unwrap(), [])
  assert_eq(d.finish(), [
    @frametrail.Rejected(start=0L, end=2L, reason=@frametrail.Truncated),
  ])
  assert_eq(d.finish(), [])
  assert_true(d.feed(b"") is Err(_))
  assert_eq(d.stats().rejected, 1L)
}

///|
test "finish oversize does not duplicate diagnostic" {
  let d = @frametrail.Decoder::new(max_encoded=1).unwrap()
  assert_eq(d.feed(b"\x01\x01").unwrap().length(), 1)
  assert_eq(d.finish(), [])
  assert_eq(d.stats().rejected, 1L)
}

///|
test "every proper nonempty prefix reports truncation" {
  let wire = @frametrail.encode_frame(b"a\x00b")
  for cut in 1..<wire.length() {
    let (events, _) = @frametrail.replay(wire[:cut].to_owned()).unwrap()
    assert_eq(events, [
      @frametrail.Rejected(
        start=0L,
        end=cut.to_int64(),
        reason=@frametrail.Truncated,
      ),
    ])
  }
}

///|
test "empty input and invalid options" {
  let (events, stats) = @frametrail.replay(b"").unwrap()
  assert_eq(events, [])
  assert_eq(stats.bytes_in, 0L)
  assert_true(@frametrail.replay(b"", chunk_size=0) is Err(_))
  for n in [-1, 0, 1048577] {
    assert_true(@frametrail.Decoder::new(max_encoded=n) is Err(_))
  }
}

///|
test "mixed damaged stream is invariant for chunk sizes 1 through 64" {
  let stream = join([
    b"\x00\x05\x11\x00",
    @frametrail.encode_frame(b"A"),
    Bytes::make(30, 1),
    b"\x00\x01\x00",
    @frametrail.encode_frame(b"B\x00C"),
    b"\x03\x11",
  ])
  let expected = @frametrail.replay(stream, chunk_size=1000, max_encoded=16).unwrap()
  for size in 1..<=64 {
    assert_eq(
      @frametrail.replay(stream, chunk_size=size, max_encoded=16).unwrap(),
      expected,
    )
  }
}

///|
test "payload single bit corruption cannot pass CRC" {
  let payload = b"abc\x00def"
  let crc = @frametrail.crc16(payload)
  for bit in 0..<(payload.length() * 8) {
    let raw = Array::makei(payload.length(), i => payload[i])
    raw[bit / 8] = (raw[bit / 8].to_int() ^ (1 << (bit % 8))).to_byte()
    raw.push((crc >> 8).to_byte())
    raw.push((crc & 255).to_byte())
    let wire = join([@frametrail.cobs_encode(Bytes::from_array(raw)), b"\x00"])
    let (events, _) = @frametrail.replay(wire).unwrap()
    assert_true(
      events[0] is @frametrail.Rejected(reason=@frametrail.ChecksumMismatch, ..),
    )
  }
}

///|
test "generated arbitrary streams stay bounded and chunk invariant" {
  for seed in 0..<100 {
    let data = Bytes::makei(512, i => {
      ((i * i + seed * 31 + i * seed) % 256).to_byte()
    })
    let whole = @frametrail.replay(data, chunk_size=512, max_encoded=32).unwrap()
    let split = @frametrail.replay(data, chunk_size=7, max_encoded=32).unwrap()
    assert_eq(whole, split)
    assert_true(split.1.peak_buffered <= 32)
  }
}
