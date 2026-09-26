///|
pub(all) enum Fault {
  MalformedCobs
  MissingChecksum
  ChecksumMismatch
  Oversize
  Truncated
} derive(Eq, Debug)

///|
/// Offsets are zero-based byte offsets; end is exclusive.
pub(all) enum Event {
  Frame(start~ : Int64, end~ : Int64, payload~ : Bytes)
  Rejected(start~ : Int64, end~ : Int64, reason~ : Fault)
} derive(Eq, Debug)

///|
pub(all) struct Stats {
  bytes_in : Int64
  frames : Int64
  rejected : Int64
  empty_delimiters : Int64
  peak_buffered : Int
} derive(Eq, Debug, ToJson)

///|
pub extend Fault with Eq::{equal, not_equal}

///|
pub extend Fault with @debug.Debug::{to_repr}

///|
pub extend Event with Eq::{equal, not_equal}

///|
pub extend Event with @debug.Debug::{to_repr}

///|
pub extend Stats with Eq::{equal, not_equal}

///|
pub extend Stats with @debug.Debug::{to_repr}

///|
pub extend Stats with ToJson::{to_json}

///|
/// Mutable, single-owner stream session. It stores at most max_encoded
/// bytes, discarding oversized packets until the next zero delimiter.
struct Decoder {
  max_encoded : Int
  buffer : Array[Byte]
  mut offset : Int64
  mut start : Int64
  mut dropping : Bool
  mut closed : Bool
  mut frames : Int64
  mut rejected : Int64
  mut empty_delimiters : Int64
  mut peak : Int
}

///|
/// Limits cover encoded bytes excluding the delimiter. Default: 4096.
pub fn Decoder::new(max_encoded? : Int = 4096) -> Result[Decoder, String] {
  if max_encoded < 1 || max_encoded > 1048576 {
    return Err("max_encoded must be in 1..1048576")
  }
  Ok({
    max_encoded,
    buffer: [],
    offset: 0L,
    start: 0L,
    dropping: false,
    closed: false,
    frames: 0L,
    rejected: 0L,
    empty_delimiters: 0L,
    peak: 0,
  })
}

///|
pub fn Decoder::stats(self : Decoder) -> Stats {
  {
    bytes_in: self.offset,
    frames: self.frames,
    rejected: self.rejected,
    empty_delimiters: self.empty_delimiters,
    peak_buffered: self.peak,
  }
}

///|
pub fn Decoder::buffered(self : Decoder) -> Int {
  self.buffer.length()
}

///|
fn decode_packet(data : Bytes) -> Result[Bytes, Fault] {
  let raw = match cobs_decode(data) {
    Ok(raw) => raw
    Err(_) => return Err(MalformedCobs)
  }
  let n = raw.length()
  if n < 2 {
    return Err(MissingChecksum)
  }
  let payload = raw[:n - 2].to_owned()
  let expected = (raw[n - 2].to_int() << 8) | raw[n - 1].to_int()
  if crc16(payload) != expected {
    return Err(ChecksumMismatch)
  }
  Ok(payload)
}

///|
/// Feed an arbitrary chunk. Empty chunks are legal. Feed after finish is
/// an error; create a new decoder to begin a new session.
pub fn Decoder::feed(
  self : Decoder,
  chunk : Bytes,
) -> Result[Array[Event], String] {
  if self.closed {
    return Err("decoder is closed")
  }
  let events : Array[Event] = []
  for byte in chunk {
    self.offset = self.offset + 1L
    if byte == 0 {
      if self.dropping {
        self.dropping = false
      } else if self.buffer.is_empty() {
        self.empty_delimiters = self.empty_delimiters + 1L
      } else {
        match decode_packet(Bytes::from_array(self.buffer)) {
          Ok(payload) => {
            events.push(Frame(start=self.start, end=self.offset, payload~))
            self.frames = self.frames + 1L
          }
          Err(reason) => {
            events.push(Rejected(start=self.start, end=self.offset, reason~))
            self.rejected = self.rejected + 1L
          }
        }
      }
      self.buffer.clear()
      self.start = self.offset
    } else if !self.dropping {
      if self.buffer.length() == self.max_encoded {
        // Report once, on the first excess byte; do not retain that byte.
        events.push(
          Rejected(start=self.start, end=self.offset, reason=Oversize),
        )
        self.rejected = self.rejected + 1L
        self.buffer.clear()
        self.dropping = true
      } else {
        self.buffer.push(byte)
        if self.buffer.length() > self.peak {
          self.peak = self.buffer.length()
        }
      }
    }
  }
  Ok(events)
}

///|
/// Seal a stream. A remaining partial packet is rejected once.
/// An oversize packet was already reported; finish does not double-count it.
pub fn Decoder::finish(self : Decoder) -> Array[Event] {
  if self.closed {
    return []
  }
  self.closed = true
  let events : Array[Event] = []
  if !self.dropping && !self.buffer.is_empty() {
    events.push(Rejected(start=self.start, end=self.offset, reason=Truncated))
    self.rejected = self.rejected + 1L
  }
  self.buffer.clear()
  events
}
