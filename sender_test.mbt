///|
test "sender bound covers COBS block and checksum boundaries" {
  for n in [0, 1, 251, 252, 253, 254, 255, 507, 508, 4096] {
    for fill in [b'\x00', b'\xff'] {
      let data = Bytes::make(n, fill)
      assert_true(
        @frametrail.encode_frame(data).length() <=
        @frametrail.max_frame_size(n).unwrap(),
      )
    }
  }
  assert_eq(@frametrail.max_frame_size(0), Ok(4))
  assert_true(@frametrail.max_frame_size(-1) is Err(_))
  assert_true(@frametrail.max_frame_size(2147483647) is Err(_))
}

///|
test "checked sender agrees with decoder at exact capacity" {
  for n in [0, 1, 252, 253, 254, 255, 508] {
    let payload = Bytes::makei(n, i => (i % 256).to_byte())
    let size = @frametrail.encode_frame(payload).length() - 1
    let wire = @frametrail.encode_frame_checked(payload, max_encoded=size).unwrap()
    let (events, stats) = @frametrail.replay(wire, max_encoded=size).unwrap()
    assert_eq(stats.rejected, 0L)
    assert_true(events[0] is @frametrail.Frame(payload=p, ..) && p == payload)
    assert_true(
      @frametrail.encode_frame_checked(payload, max_encoded=size - 1) is Err(_),
    )
  }
}

///|
test "checked sender rejects invalid configuration and oversized payload" {
  for limit in [-1, 0, 1048577] {
    assert_true(
      @frametrail.encode_frame_checked(b"", max_encoded=limit) is Err(_),
    )
  }
  assert_true(@frametrail.encode_frame_checked(Bytes::make(4096, 0)) is Err(_))
}
