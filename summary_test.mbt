///|
test "summary accounts for every rejection without retaining payloads" {
  let stream = join([
    b"\x00",
    @frametrail.encode_frame(b"OK"),
    b"\x05\x11\x00",
    b"\x01\x00",
    b"\x04\x41\x01\x01\x00",
    b"\x01\x01\x01\x01\x01\x01\x01\x00",
    b"\x02\x11",
  ])
  let (_, expected) = @frametrail.replay(stream, max_encoded=6).unwrap()
  for chunk in [1, 3, 4096] {
    let (stats, faults) = @frametrail.summarize(
      stream,
      chunk_size=chunk,
      max_encoded=6,
    ).unwrap()
    assert_eq(stats, expected)
    assert_eq(stats.frames, 1L)
    assert_eq(stats.rejected, 5L)
    for
      key in [
        "MALFORMED_COBS", "MISSING_CHECKSUM", "CRC_MISMATCH", "OVERSIZE", "TRUNCATED",
      ] {
      assert_eq(faults.get(key), Some(1L))
    }
    assert_eq(faults.get("TIMED_OUT"), Some(0L))
  }
}

///|
test "summary validates bounds and handles empty captures" {
  assert_true(@frametrail.summarize(b"", chunk_size=0) is Err(_))
  assert_true(@frametrail.summarize(b"", max_encoded=0) is Err(_))
  let (stats, faults) = @frametrail.summarize(b"").unwrap()
  assert_eq(stats.bytes_in, 0L)
  assert_eq(stats.frames, 0L)
  assert_eq(faults.length(), 6)
}
