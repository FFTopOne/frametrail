# v0.2.0 验证记录

本地验证日期：2026-09-26；Windows，Node.js v24.15.0；MoonBit 版本见 `toolchain.txt`。

- `moon info`、`moon fmt --check` 与双目标 `moon check --deny-warn`。
- `moon test --target wasm-gc --deny-warn`：38/38。
- `moon test --target js --deny-warn`：38/38。
- JS release 构建，以及构建产物、分发 CLI 的真实进程测试。
- Python 独立校验：15 组双向协议向量；文件错误、BOM、行列、二进制、汇总与退出码。
- Python 数据流对照：固定种子 20260926，51 组流 × 3 种切块方式，比较完整 JSON；覆盖五类离线故障。实时超时另由 MoonBit 测试覆盖。
- `package_release.py` 验证解压后校验和、版本与示例运行；相同输入重复打包 SHA-256 一致。

远程三平台结果以 [GitHub Actions](https://github.com/FFTopOne/frametrail/actions) 对应提交的执行记录为准。CI 使用滚动工具链，输出实际版本。测试使用合成数据，未做真实设备联调、性能基准或所有输入的穷尽检查。
