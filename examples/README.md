# 演示场景

`mixed.hex` 为合成传感器数据，顺序是正常载荷 TEMP=23.5、错误 CRC 帧、正常载荷 TEMP=23.6。没有真实传感器数据或用户个人数据。

```sh
node dist/frametrail.cjs replay examples/mixed.hex 3
```

预期：2 帧恢复，1 次 CRC_MISMATCH；错误字节范围为 [13,18)，第二个正确帧从偏移 18 开始。命令返回 1，表示输入包含拒收帧，不是程序崩溃。

改为每次输入 1、7 或 4096 字节，JSON 报告应相同。

`clean.hex` 含两个正常帧，退出码应为 0。`truncated.hex` 为末尾缺少分隔符的输入，退出码应为 1。
