# FrameTrail 帧迹

基于 MoonBit 的设备数据流分帧与故障诊断库。版本 0.1.0。

将接收侧任意切块的二进制流还原为经过 CRC 校验的载荷，并给出错误段的绝对字节位置。适合将自定义设备协议接入 MoonBit 应用、离线分析采集日志和编写通信回归测试。

源码仓库：[https://github.com/FFTopOne/frametrail](https://github.com/FFTopOne/frametrail)。维护账号：FFTopOne。当前版本为可运行、已验证的 v0.1.0；尚未发布 Mooncakes 包或完成比赛报名。参赛方向：2026 年 9 月 MoonBit 黑客松新项目方向。

## 五分钟运行

预编译命令行需要 Node.js 22 或更新版本，无第三方 npm 依赖。项目根目录执行：

```sh
node dist/frametrail.cjs help
node dist/frametrail.cjs encode 313233343536373839
node dist/frametrail.cjs replay examples/clean.hex 3
node dist/frametrail.cjs replay examples/mixed.hex 3
```

编码结果应为 `0C31323334353637383929B100`。混合示例应恢复 `TEMP=23.5` 和 `TEMP=23.6`，报告 `[13,18)` 区间 `CRC_MISMATCH`，退出码为 1。这是可供 CI 判定的预期结果。

命令语法：

```text
encode HEX
decode HEX [CHUNK_BYTES=16] [MAX_ENCODED=4096]
replay HEX_FILE [CHUNK_BYTES=16] [MAX_ENCODED=4096]
demo
```

退出码 0 表示无拒收帧，1 表示检测到拒收帧，2 表示输入、文件或参数错误。空流合法，返回 0。十六进制支持大小写和 ASCII 空白，不接受 `0x` 前缀、逗号或奇数位。回放文件须为不带 BOM 的 UTF-8 十六进制文本，最大 4 MiB。CLI 加载整个文件并汇总事件；大流应直接使用核心增量 API。

## 协议边界

```text
wire = COBS(payload || CRC16_big_endian(payload)) || 00
CRC  = CRC-16/IBM-3740
poly = 0x1021, init = 0xffff, refin = false, refout = false, xorout = 0
check("123456789") = 0x29b1
```

COBS 和 CRC 是已有算法，本项目不声称算法原创。这里定义的组合是项目参考帧格式，不是通用设备标准，不等同于 Modbus、MQTT 或 BLE 标准协议。发送端须使用相同格式，或由外部适配器转换。CRC 用于差错检测，不提供认证或加密。

## 核心能力

- COBS 编码和严格解码，支持 254 字节连续非零边界及任意二进制载荷。
- 任意块增量喂入、连续多帧解析和空分隔符计数。
- 格式错误、缺少校验码、CRC 不匹配、帧超限、流截断五类错误。
- 超限后停止缓存，并在下一个零分隔符恢复接收。
- 每个事件提供从 0 开始、左闭右开的流字节范围。
- 十六进制回放和 JSON 报告；报告中的 Int64 偏移、累计计数使用十进制字符串，避免 JavaScript 数值精度丢失。

增量解码器只保留不超过 `max_encoded` 个逻辑待解析字节，不包括分隔符；默认 4096，可设置 1 至 1048576。数组容量、运行时开销、当前输出事件与调用方保存的结果不计入这一界限。单次 `feed` 返回的事件数组随该块帧数增长。

## MoonBit API

将本仓库配置为本地依赖后，在调用方的 `moon.pkg` 引入模块；本包尚未发布到 Mooncakes：

```moonbit
import {
  "FFTopOne/frametrail" @frame,
}
```

```moonbit
let wire = @frame.encode_frame(b"TEMP=23.5")
let decoder = @frame.Decoder::new(max_encoded=4096).unwrap()
let first = decoder.feed(wire[:3].to_owned()).unwrap()
let second = decoder.feed(wire[3:].to_owned()).unwrap()
let tail = decoder.finish()
```

`first` 为空，`second` 包含完整帧，`tail` 为空。`finish()` 将会话关闭，可重复调用而不重复报错；关闭后 `feed()` 返回错误。一个 Decoder 用于一个有序字节流，不应并发共享。

## 构建和验证

安装工具链见 https://docs.moonbitlang.com/en/stable/tutorial/tour.html 。开发环境实际版本见 `docs/toolchain.txt`。

```sh
moon fmt --check
moon check --target wasm-gc --deny-warn
moon check --target js --deny-warn
moon test --target wasm-gc --deny-warn
moon test --target js --deny-warn
moon build --target js --release --deny-warn
python scripts/verify_reference.py
```

独立参考检查只用 Python 标准库和 Node.js。使用 Python `binascii.crc_hqx` 和独立的块式 COBS 实现交叉检查 15 组双向帧向量，并检查真实进程退出码、文件限制与切块一致性。测试数据均为合成数据。

核心库在 wasm-gc 和 js 目标上各通过 25 项测试。测试中还包括 1024 个确定性编解码生成样例、100 个任意字节流样例、56 次单比特载荷变异、所有切分点和长度边界。不是 1024 个独立测试用例，也未测试所有可能输入。

CLI 仅支持 JS/Node.js，只有文件读取和退出码使用少量 JS FFI，编解码、状态机、参数处理和报告由 MoonBit 实现。未宣称 Native 目标或硬件平台已通过测试。GitHub Actions 已在 Ubuntu 上通过构建、格式检查、JS 与 wasm-gc 测试及独立参考检查：[首次验证记录](https://github.com/FFTopOne/frametrail/actions/runs/36214085512)。CI 安装当前工具链并输出版本，后续需维护滚动编译器兼容性。

## 目录

| 文件 | 职责 |
|---|---|
| codec.mbt | COBS 与 CRC16、参考帧编码 |
| stream.mbt | 有界增量状态机、错误和统计 |
| replay.mbt | 严格十六进制、JSON 事件、离线回放 |
| cmd/main | CLI 和最小文件系统适配 |
| codec_test.mbt / stream_test.mbt | 黑盒测试与确定性生成检查 |
| scripts/verify_reference.py | 独立参考与真实进程检查 |
| examples | 可重复运行的合成示例 |
| dist/frametrail.cjs | MoonBit 生成的 JS 演示程序 |
| docs | 设计、测试记录和演示讲稿 |

## 当前限制

尚未实现串口驱动、蓝牙连接、GUI、时间戳采集、重传和真实设备联调。载荷作为字节串交给调用方，不解释温度或传感器字段。

只有遇到分隔符才能重新定位下一段；丢失分隔符可能导致多个原始帧一起被拒收，不能承诺恢复所有损坏数据。超限事件的 end 是首次超过限制的位置，不是整段丢弃数据的终点。没有分隔符的半帧将在 `finish` 时被拒收；长期连接的超时策略由调用方决定。

## 许可证和来源

本项目源代码按 Apache-2.0 提供。MoonBit 标准库同为 Apache-2.0。预编译 JS 包含由编译器链接的标准库代码，详见 `THIRD_PARTY_NOTICES.md`。未复制第三方 COBS 实现代码；参考算法资料后独立实现。

- COBS 原作者资料：https://www.stuartcheshire.org/papers/COBSforSIGCOMM/
- CRC 参数目录：https://reveng.sourceforge.io/crc-catalogue/all.htm#crc.cat.crc-16-ibm-3740
- MoonBit 文档：https://docs.moonbitlang.com/en/stable/

AI 辅助用于设计、代码、测试和文档。参赛者提交前应能解释编码方式、错误恢复、内存边界与验证结果，并对最终质量负责。
