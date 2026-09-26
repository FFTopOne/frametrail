// Learn more about moon.mod configuration:
// https://docs.moonbitlang.com/en/latest/toolchain/moon/module.html
//
// To add a dependency, run this command in your terminal:
//   moon add moonbitlang/x
//
// Or manually declare it in `import`, for example:
// import {
//   "moonbitlang/x@0.4.6",
// }

name = "FFTopOne/frametrail"

version = "0.2.0"

readme = "README.md"

repository = "https://github.com/FFTopOne/frametrail"

license = "Apache-2.0"

keywords = [ "cobs", "framing", "crc", "stream", "diagnostics" ]

preferred_target = "wasm-gc"

description = "Bounded incremental COBS framing, CRC validation and replay diagnostics in MoonBit"
