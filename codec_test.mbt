///|
test "CRC independent check vector" {
  assert_eq(@frametrail.crc16(b"123456789"), 0x29b1)
  assert_eq(@frametrail.crc16(b""), 0xffff)
}

///|
test "COBS fixed vectors" {
  let vectors = [
    (b"", b"\x01"),
    (b"\x00", b"\x01\x01"),
    (b"\x00\x00", b"\x01\x01\x01"),
    (b"\x11\x22\x00\x33", b"\x03\x11\x22\x02\x33"),
    (b"\x11\x22\x33", b"\x04\x11\x22\x33"),
  ]
  for (raw, encoded) in vectors {
    assert_eq(@frametrail.cobs_encode(raw), encoded)
    assert_eq(@frametrail.cobs_decode(encoded), Ok(raw))
  }
}

///|
test "COBS rejects empty zero embedded zero and overruns" {
  for invalid in [b"", b"\x00", b"\x02", b"\x03\x11", b"\x02\x00", b"\x01\x00"] {
    assert_true(@frametrail.cobs_decode(invalid) is Err(_))
  }
}

///|
test "COBS 254 byte run boundary" {
  let raw = Bytes::make(254, 0x11)
  let encoded = @frametrail.cobs_encode(raw)
  assert_eq(encoded.length(), 256)
  assert_eq(encoded[0], 255)
  assert_eq(encoded[255], 1)
  assert_eq(@frametrail.cobs_decode(encoded), Ok(raw))
  // The shorter terminal-FF representation is also legal.
  assert_eq(@frametrail.cobs_decode(encoded[:255].to_owned()), Ok(raw))
}

///|
test "COBS generated roundtrips lengths 0 through 1023" {
  for n in 0..<1024 {
    let raw = Bytes::makei(n, i => ((i * 73 + n * 19) % 256).to_byte())
    let encoded = @frametrail.cobs_encode(raw)
    assert_eq(@frametrail.cobs_decode(encoded), Ok(raw))
    for b in encoded {
      assert_true(b != 0)
    }
    assert_true(encoded.length() <= n + n / 254 + 1)
  }
}

///|
test "COBS all zero and all nonzero boundary lengths" {
  for n in [1, 253, 254, 255, 508, 509, 4096] {
    for b in [b'\x00', b'\xff'] {
      let raw = Bytes::make(n, b)
      assert_eq(@frametrail.cobs_decode(@frametrail.cobs_encode(raw)), Ok(raw))
    }
  }
}

///|
test "hex strictness and case" {
  assert_eq(@frametrail.parse_hex("aa 00\r\nFf\t12"), Ok(b"\xaa\x00\xff\x12"))
  assert_eq(@frametrail.to_hex(b"\xaa\x00\xff\x12"), "AA00FF12")
  for bad in ["1", "0x01", "GG", "12,34", "中文"] {
    assert_true(@frametrail.parse_hex(bad) is Err(_))
  }
}

///|
test "hex all bytes roundtrip" {
  let raw = Bytes::makei(256, i => i.to_byte())
  assert_eq(@frametrail.parse_hex(@frametrail.to_hex(raw)), Ok(raw))
}
