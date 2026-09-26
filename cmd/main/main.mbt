///|
extern "js" fn read_file(path : String) -> Bytes? =
  #| (path) => {
  #|   const fs = require('node:fs');
  #|   let fd;
  #|   try {
  #|     fd = fs.openSync(path, fs.constants.O_RDONLY | (fs.constants.O_NONBLOCK || 0));
  #|     if (!fs.fstatSync(fd).isFile() || fs.fstatSync(fd).size > 4194304) return undefined;
  #|     const buffer = Buffer.alloc(4194305);
  #|     let size = 0, count;
  #|     while (size < buffer.length && (count = fs.readSync(fd, buffer, size, buffer.length - size, null)) > 0) size += count;
  #|     return size <= 4194304 ? new Uint8Array(buffer.subarray(0, size)) : undefined;
  #|   } catch (_) { return undefined; }
  #|   finally { if (fd !== undefined) fs.closeSync(fd); }
  #| }

///|
extern "js" fn utf8_text(data : Bytes) -> String? =
  #| (data) => { try { return new TextDecoder('utf-8', {fatal: true, ignoreBOM: true}).decode(data); } catch (_) { return undefined; } }

///|
extern "js" fn set_exit(code : Int) -> Unit =
  #| (code) => { process.exitCode = code; }

///|
fn fail(message : String) -> Unit {
  let json : Json = { "error": message }
  println(json.stringify())
  set_exit(2)
}

///|
fn report(data : Bytes, chunk : Int, limit : Int) -> Unit {
  match @lib.replay(data, chunk_size=chunk, max_encoded=limit) {
    Err(e) => fail(e)
    Ok((events, stats)) => {
      let report : Json = {
        "profile": "frametrail-cobs-crc16-v1",
        "events": events.map(e => e.as_json()),
        "stats": stats.to_json(),
      }
      println(report.stringify(indent=2))
      set_exit(if stats.rejected > 0L { 1 } else { 0 })
    }
  }
}

///|
fn report_summary(data : Bytes, chunk : Int, limit : Int) -> Unit {
  match @lib.summarize(data, chunk_size=chunk, max_encoded=limit) {
    Err(e) => fail(e)
    Ok((stats, faults)) => {
      let report : Json = {
        "profile": "frametrail-cobs-crc16-v1",
        "stats": stats.to_json(),
        "fault_counts": faults.to_json(),
      }
      println(report.stringify(indent=2))
      set_exit(if stats.rejected > 0L { 1 } else { 0 })
    }
  }
}

///|
fn parse_option(
  args : Array[String],
  index : Int,
  fallback : Int,
) -> Result[Int, String] {
  if args.length() <= index {
    return Ok(fallback)
  }
  let text = args[index]
  if text.is_empty() {
    return Err("options must be positive decimal integers")
  }
  let mut value = 0
  for ch in text {
    let n = ch.to_int() - 48
    if n < 0 || n > 9 || value > (2147483647 - n) / 10 {
      return Err("options must be positive decimal integers within Int32 range")
    }
    value = value * 10 + n
  }
  Ok(value)
}

///|
fn main {
  let argv = @env.args()
  let args = Array::makei(argv.length() - 2, i => argv[i + 2])
  if args.length() == 0 || args[0] == "help" || args[0] == "--help" {
    println(
      "FrameTrail 0.2.0\nencode HEX\ndecode HEX [CHUNK_BYTES=16] [MAX_ENCODED=4096]\nreplay HEX_FILE [CHUNK_BYTES=16] [MAX_ENCODED=4096]\nreplay-bin BINARY_FILE [CHUNK_BYTES=16] [MAX_ENCODED=4096]\nsummarize HEX_FILE [CHUNK_BYTES=16] [MAX_ENCODED=4096]\ndemo\nExit: 0 clean, 1 rejected frame, 2 input error. JSON offsets are zero-based, end-exclusive decimal strings.",
    )
    return
  }
  if args[0] == "demo" && args.length() == 1 {
    let bytes : Array[Byte] = []
    for b in @lib.encode_frame(b"TEMP=23.5") {
      bytes.push(b)
    }
    for b in b"\x04\x41\x01\x01\x00" {
      bytes.push(b)
    }
    for b in @lib.encode_frame(b"TEMP=23.6") {
      bytes.push(b)
    }
    report(Bytes::from_array(bytes), 3, 4096)
    return
  }
  if args.length() < 2 || args.length() > 4 {
    fail("expected encode, decode or replay; use help")
    return
  }
  let command = args[0]
  if command != "encode" &&
    command != "decode" &&
    command != "replay" &&
    command != "replay-bin" &&
    command != "summarize" {
    fail("unknown command; use help")
    return
  }
  if command == "encode" && args.length() != 2 {
    fail("encode accepts exactly one hex string")
    return
  }
  let chunk = match parse_option(args, 2, 16) {
    Ok(n) => n
    Err(e) => {
      fail(e)
      return
    }
  }
  let limit = match parse_option(args, 3, 4096) {
    Ok(n) => n
    Err(e) => {
      fail(e)
      return
    }
  }
  if command == "replay-bin" {
    match read_file(args[1]) {
      Some(data) => report(data, chunk, limit)
      None => fail("cannot read regular binary file (limit 4 MiB)")
    }
    return
  }
  let source = if command == "replay" || command == "summarize" {
    let bytes = match read_file(args[1]) {
      Some(data) => data
      None => {
        fail("cannot read regular hex file (limit 4 MiB)")
        return
      }
    }
    match utf8_text(bytes) {
      Some(text) => text
      None => {
        fail("hex file must contain valid UTF-8")
        return
      }
    }
  } else {
    args[1]
  }
  let data = match @lib.parse_hex_detailed(source) {
    Ok(data) => data
    Err(e) => {
      let diagnostic : Json = {
        "error": e.message,
        "char_offset": e.offset,
        "line": e.line,
        "column": e.column,
      }
      println(diagnostic.stringify())
      set_exit(2)
      return
    }
  }
  if command == "encode" {
    println(@lib.to_hex(@lib.encode_frame(data)))
    return
  }
  if command == "summarize" {
    report_summary(data, chunk, limit)
  } else {
    report(data, chunk, limit)
  }
}
