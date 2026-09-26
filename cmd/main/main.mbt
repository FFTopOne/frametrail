///|
extern "js" fn read_hex_file(path : String) -> String? =
  #| (path) => {
  #|   try {
  #|     const fs = require('node:fs');
  #|     if (!fs.statSync(path).isFile() || fs.statSync(path).size > 4194304) return undefined;
  #|     return fs.readFileSync(path, 'utf8');
  #|   } catch (_) { return undefined; }
  #| }

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
      "FrameTrail 0.1.0\nencode HEX\ndecode HEX [CHUNK_BYTES=16] [MAX_ENCODED=4096]\nreplay HEX_FILE [CHUNK_BYTES=16] [MAX_ENCODED=4096]\ndemo\nExit: 0 clean, 1 rejected frame, 2 input error. JSON offsets are zero-based, end-exclusive decimal strings.",
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
  if command != "encode" && command != "decode" && command != "replay" {
    fail("unknown command; use help")
    return
  }
  if command == "encode" && args.length() != 2 {
    fail("encode accepts exactly one hex string")
    return
  }
  let source = if command == "replay" {
    match read_hex_file(args[1]) {
      Some(text) => text
      None => {
        fail("cannot read regular UTF-8 hex file (limit 4 MiB)")
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
  report(data, chunk, limit)
}
