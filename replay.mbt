///|
/// Parse pairs of hex digits, ignoring ASCII whitespace. Rejects odd digits
/// and all other characters rather than silently losing corrupt input.
pub fn parse_hex(text : String) -> Result[Bytes, String] {
  let out : Array[Byte] = []
  let mut high = -1
  for ch in text {
    let c = ch.to_int()
    if c == 32 || c == 9 || c == 10 || c == 13 {
      continue
    }
    let v = if c >= 48 && c <= 57 {
      c - 48
    } else if c >= 65 && c <= 70 {
      c - 55
    } else if c >= 97 && c <= 102 {
      c - 87
    } else {
      return Err("invalid hex character")
    }
    if high < 0 {
      high = v
    } else {
      out.push((high * 16 + v).to_byte())
      high = -1
    }
  }
  if high >= 0 {
    return Err("odd number of hex digits")
  }
  Ok(Bytes::from_array(out))
}

///|
pub fn to_hex(data : Bytes) -> String {
  let digits = "0123456789ABCDEF"
  let out = StringBuilder()
  for b in data {
    let n = b.to_int()
    out.write_char(digits[n >> 4].to_char().unwrap())
    out.write_char(digits[n & 15].to_char().unwrap())
  }
  out.to_string()
}

///|
pub fn Fault::code(self : Fault) -> String {
  match self {
    MalformedCobs => "MALFORMED_COBS"
    MissingChecksum => "MISSING_CHECKSUM"
    ChecksumMismatch => "CRC_MISMATCH"
    Oversize => "OVERSIZE"
    Truncated => "TRUNCATED"
    TimedOut => "TIMED_OUT"
  }
}

///|
pub fn Event::as_json(self : Event) -> Json {
  match self {
    Frame(start~, end~, payload~) =>
      {
        "type": "frame",
        "start": start.to_string(),
        "end": end.to_string(),
        "payload_hex": to_hex(payload),
        "payload_bytes": payload.length(),
      }
    Rejected(start~, end~, reason~) =>
      {
        "type": "rejected",
        "start": start.to_string(),
        "end": end.to_string(),
        "code": reason.code(),
      }
  }
}

///|
/// Reproducible replay; diagnostics and recovered frames are independent
/// of chunk_size. The returned events occupy memory proportional to output.
pub fn replay(
  data : Bytes,
  chunk_size? : Int = 16,
  max_encoded? : Int = 4096,
) -> Result[(Array[Event], Stats), String] {
  if chunk_size < 1 {
    return Err("chunk_size must be positive")
  }
  let decoder = match Decoder::new(max_encoded~) {
    Ok(d) => d
    Err(e) => return Err(e)
  }
  let events : Array[Event] = []
  let mut pos = 0
  while pos < data.length() {
    let count = if chunk_size < data.length() - pos {
      chunk_size
    } else {
      data.length() - pos
    }
    match decoder.feed(data[pos:pos + count].to_owned()) {
      Ok(batch) =>
        for e in batch {
          events.push(e)
        }
      Err(e) => return Err(e)
    }
    pos = pos + count
  }
  for e in decoder.finish() {
    events.push(e)
  }
  Ok((events, decoder.stats()))
}
