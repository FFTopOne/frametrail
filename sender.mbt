///|
/// Conservative wire size including CRC, COBS overhead and the delimiter.
/// Returns an error instead of overflowing Int on unrepresentable lengths.
pub fn max_frame_size(payload_length : Int) -> Result[Int, String] {
  if payload_length < 0 {
    return Err("payload length must be nonnegative")
  }
  let raw = payload_length.to_int64() + 2L
  let bound = raw + raw / 254L + 2L
  if bound > 2147483647L {
    return Err("wire size exceeds Int range")
  }
  Ok(bound.to_int())
}

///|
/// Encode only if the packet fits the receiver's encoded-byte limit.
/// The limit excludes the final zero delimiter, as in Decoder::new.
pub fn encode_frame_checked(
  payload : Bytes,
  max_encoded? : Int = 4096,
) -> Result[Bytes, String] {
  if max_encoded < 1 || max_encoded > 1048576 {
    return Err("max_encoded must be in 1..1048576")
  }
  // Every COBS packet has at least one code byte plus two CRC bytes.
  if payload.length() > max_encoded - 3 {
    return Err("frame exceeds receiver limit")
  }
  let wire = encode_frame(payload)
  if wire.length() - 1 > max_encoded {
    return Err("frame exceeds receiver limit")
  }
  Ok(wire)
}
