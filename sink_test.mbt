///|
test "callback sink matches batch API on damaged stream" {
  let stream = join([
    @frametrail.encode_frame(b"ok"),
    b"\x05\x11\x00",
    Bytes::make(30, 1),
    b"\x00",
    @frametrail.encode_frame(b"last"),
  ])
  let (expected, stats) = @frametrail.replay(stream, max_encoded=16).unwrap()
  let d = @frametrail.Decoder::new(max_encoded=16).unwrap()
  let actual : Array[@frametrail.Event] = []
  assert_true(d.feed_each(stream[:], e => actual.push(e)) is Ok(_))
  for e in d.finish() {
    actual.push(e)
  }
  assert_eq(actual, expected)
  assert_eq(d.stats(), stats)
}

///|
test "callback sink consumes many frames without retaining event array" {
  let d = @frametrail.Decoder::new().unwrap()
  let packet = @frametrail.encode_frame(b"sample")
  let many = join(Array::make(10000, packet))
  let mut count = 0
  assert_true(d.feed_each(many[:], _ => count = count + 1) is Ok(_))
  assert_eq(count, 10000)
  assert_eq(d.stats().frames, 10000L)
  assert_eq(d.buffered(), 0)
  assert_eq(d.stats().peak_buffered, packet.length() - 1)
}

///|
test "callbacks observe settled state and cannot reenter decoder" {
  let d = @frametrail.Decoder::new().unwrap()
  let wire = join([
    @frametrail.encode_frame(b"a"),
    @frametrail.encode_frame(b"b"),
  ])
  let states : Array[(Int64, Int, Bool, Int)] = []
  d
  .feed_each(wire[:], _ => {
    let blocked = d.feed(b"") is Err(_)
    states.push((d.stats().frames, d.buffered(), blocked, d.finish().length()))
  })
  .unwrap()
  assert_eq(states, [(1L, 0, true, 0), (2L, 0, true, 0)])
  assert_true(d.feed(b"") is Ok(_))
  assert_eq(d.finish(), [])
  assert_true(d.feed_each(b""[:], _ => ()) is Err(_))
}
