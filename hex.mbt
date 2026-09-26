///|
/// Positions count Unicode scalar values, not UTF-8 bytes or UTF-16 units.
/// offset is zero-based; line and column are one-based. LF advances line.
pub(all) struct HexError {
  offset : Int
  line : Int
  column : Int
  message : String
} derive(Eq, Debug)

///|
pub extend HexError with Eq::{equal, not_equal}

///|
pub extend HexError with @debug.Debug::{to_repr}

///|
/// Accept a single leading Unicode BOM and ASCII whitespace. Every other
/// non-hex character is rejected with a position, not silently skipped.
pub fn parse_hex_detailed(text : String) -> Result[Bytes, HexError] {
  let out : Array[Byte] = []
  let mut high = -1
  let mut high_pos = (0, 1, 1)
  let mut offset = 0
  let mut line = 1
  let mut column = 1
  for ch in text {
    let c = ch.to_int()
    let pos = (offset, line, column)
    offset = offset + 1
    if c == 10 {
      line = line + 1
      column = 1
    } else {
      column = column + 1
    }
    if (c == 0xfeff && pos.0 == 0) || c == 32 || c == 9 || c == 10 || c == 13 {
      continue
    }
    let v = if c >= 48 && c <= 57 {
      c - 48
    } else if c >= 65 && c <= 70 {
      c - 55
    } else if c >= 97 && c <= 102 {
      c - 87
    } else {
      return Err({
        offset: pos.0,
        line: pos.1,
        column: pos.2,
        message: "invalid hex character",
      })
    }
    if high < 0 {
      high = v
      high_pos = pos
    } else {
      out.push((high * 16 + v).to_byte())
      high = -1
    }
  }
  if high >= 0 {
    return Err({
      offset: high_pos.0,
      line: high_pos.1,
      column: high_pos.2,
      message: "odd number of hex digits",
    })
  }
  Ok(Bytes::from_array(out))
}

///|
/// Compatibility API for callers that only need a message.
pub fn parse_hex(text : String) -> Result[Bytes, String] {
  match parse_hex_detailed(text) {
    Ok(bytes) => Ok(bytes)
    Err(error) => Err(error.message)
  }
}
