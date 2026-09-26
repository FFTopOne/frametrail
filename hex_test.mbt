///|
test "hex input accepts exactly one initial BOM" {
  assert_eq(@frametrail.parse_hex("\uFEFFAA 00"), Ok(b"\xaa\x00"))
  assert_eq(@frametrail.parse_hex("\uFEFF"), Ok(b""))
  assert_true(@frametrail.parse_hex("AA\uFEFF00") is Err(_))
  assert_true(@frametrail.parse_hex("\uFEFF\uFEFFAA") is Err(_))
}

///|
test "hex syntax errors point to the actual input location" {
  assert_eq(
    @frametrail.parse_hex_detailed("AA\r\n  G0"),
    Err({ offset: 6, line: 2, column: 3, message: "invalid hex character", }),
  )
  assert_eq(
    @frametrail.parse_hex_detailed("AA\n B \n"),
    Err({ offset: 4, line: 2, column: 2, message: "odd number of hex digits", }),
  )
  assert_eq(
    @frametrail.parse_hex_detailed("AA😀"),
    Err({ offset: 2, line: 1, column: 3, message: "invalid hex character", }),
  )
  assert_eq(
    @frametrail.parse_hex_detailed("\uFEFFG0"),
    Err({ offset: 1, line: 1, column: 2, message: "invalid hex character", }),
  )
}
