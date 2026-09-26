///|
test "transport timeout rejects partial once and discards its tail" {
  let d = @frametrail.Decoder::new().unwrap()
  let packet = @frametrail.encode_frame(b"hello")
  assert_eq(d.feed(packet[:3].to_owned()).unwrap(), [])
  assert_eq(
    d.expire_partial(),
    Ok(
      Some(@frametrail.Rejected(start=0L, end=3L, reason=@frametrail.TimedOut)),
    ),
  )
  assert_eq(d.buffered(), 0)
  assert_eq(d.expire_partial(), Ok(None))
  assert_eq(d.feed(packet[3:].to_owned()).unwrap(), [])
  let events = d.feed(packet).unwrap()
  assert_eq(events, [
    @frametrail.Frame(
      start=packet.length().to_int64(),
      end=(packet.length() * 2).to_int64(),
      payload=b"hello",
    ),
  ])
  assert_eq(d.stats().rejected, 1L)
  assert_eq(d.stats().frames, 1L)
  assert_eq(d.finish(), [])
}

///|
test "idle and oversize states do not invent timeout events" {
  let d = @frametrail.Decoder::new(max_encoded=3).unwrap()
  assert_eq(d.expire_partial(), Ok(None))
  assert_eq(d.feed(b"\x01\x01\x01\x01").unwrap().length(), 1)
  assert_eq(d.expire_partial(), Ok(None))
  assert_eq(d.finish(), [])
  assert_true(d.expire_partial() is Err(_))
  assert_eq(d.stats().rejected, 1L)
}

///|
test "timeout is prohibited during event callback" {
  let d = @frametrail.Decoder::new().unwrap()
  let mut blocked = false
  d
  .feed_each(@frametrail.encode_frame(b"x")[:], _ => {
    blocked = d.expire_partial() is Err(_)
  })
  .unwrap()
  assert_true(blocked)
  assert_eq(d.expire_partial(), Ok(None))
  assert_eq(@frametrail.TimedOut.code(), "TIMED_OUT")
}
