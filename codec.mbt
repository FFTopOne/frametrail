///|
/// CRC-16/IBM-3740: poly=0x1021, init=0xffff, refin=false,
/// refout=false, xorout=0. Check("123456789") = 0x29b1.
pub fn crc16(data : Bytes) -> Int {
  let mut crc = 0xffff
  for byte in data {
    crc = crc ^ (byte.to_int() << 8)
    for _ in 0..<8 {
      crc = if (crc & 0x8000) != 0 {
        ((crc << 1) ^ 0x1021) & 0xffff
      } else {
        (crc << 1) & 0xffff
      }
    }
  }
  crc
}

///|
/// Encode COBS without its trailing zero delimiter.
pub fn cobs_encode(data : Bytes) -> Bytes {
  let out : Array[Byte] = [0]
  let mut index = 0
  let mut code = 1
  for byte in data {
    if byte == 0 {
      out[index] = code.to_byte()
      index = out.length()
      out.push(0)
      code = 1
    } else {
      out.push(byte)
      code = code + 1
      if code == 255 {
        out[index] = 255
        index = out.length()
        out.push(0)
        code = 1
      }
    }
  }
  out[index] = code.to_byte()
  Bytes::from_array(out)
}

///|
/// Decode a single delimiter-free COBS packet. The error is the encoded
/// byte index at which the packet becomes invalid.
pub fn cobs_decode(data : Bytes) -> Result[Bytes, Int] {
  if data.is_empty() {
    return Err(0)
  }
  let out : Array[Byte] = []
  let mut i = 0
  while i < data.length() {
    let start = i
    let code = data[i].to_int()
    if code == 0 || code > data.length() - i {
      return Err(i)
    }
    i = i + 1
    for _ in 1..<code {
      if data[i] == 0 {
        return Err(i)
      }
      out.push(data[i])
      i = i + 1
    }
    if code < 255 && i < data.length() {
      out.push(0)
    }
    // start is retained for a clear progress invariant in the decoder.
    if i <= start {
      return Err(start)
    }
  }
  Ok(Bytes::from_array(out))
}

///|
/// Reference wire profile: COBS(payload || CRC16 big-endian) || 00.
/// Payload semantics and device transport belong to the caller.
pub fn encode_frame(payload : Bytes) -> Bytes {
  let raw : Array[Byte] = []
  for b in payload {
    raw.push(b)
  }
  let crc = crc16(payload)
  raw.push((crc >> 8).to_byte())
  raw.push((crc & 255).to_byte())
  let out : Array[Byte] = []
  for b in cobs_encode(Bytes::from_array(raw)) {
    out.push(b)
  }
  out.push(0)
  Bytes::from_array(out)
}
