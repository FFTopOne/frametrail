///|
/// Summarize a capture without retaining decoded payloads or events.
/// Input is caller-owned; decoder buffering is bounded by max_encoded.
pub fn summarize(
  data : Bytes,
  chunk_size? : Int = 16,
  max_encoded? : Int = 4096,
) -> Result[(Stats, Map[String, Int64]), String] {
  if chunk_size < 1 {
    return Err("chunk_size must be positive")
  }
  let decoder = match Decoder::new(max_encoded~) {
    Ok(d) => d
    Err(e) => return Err(e)
  }
  let faults : Map[String, Int64] = {
    "MALFORMED_COBS": 0L,
    "MISSING_CHECKSUM": 0L,
    "CRC_MISMATCH": 0L,
    "OVERSIZE": 0L,
    "TRUNCATED": 0L,
    "TIMED_OUT": 0L,
  }
  let count = fn(event : Event) {
    match event {
      Frame(..) => ()
      Rejected(reason~, ..) => {
        let key = reason.code()
        faults[key] = faults.get(key).unwrap() + 1L
      }
    }
  }
  let mut pos = 0
  while pos < data.length() {
    let n = if chunk_size < data.length() - pos {
      chunk_size
    } else {
      data.length() - pos
    }
    match decoder.feed_each(data[pos:pos + n], count) {
      Ok(_) => ()
      Err(e) => return Err(e)
    }
    pos += n
  }
  for event in decoder.finish() {
    count(event)
  }
  Ok((decoder.stats(), faults))
}
