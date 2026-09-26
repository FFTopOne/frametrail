# 设备接入指南

## 发送端容量检查

发送端与接收端须使用同一 `max_encoded`，它不包含末尾零分隔符。
调用 `encode_frame_checked(payload, max_encoded=4096)`，超出接收端容量时返回错误，避免发送必然被拒收的帧。
`max_frame_size(payload_length)` 提供包含 CRC、COBS 最坏开销和分隔符的保守线长上限，用于分配发送缓冲区。
该上限不一定等于实际编码长度；不要用上限代替实际帧的字节数。

## 按事件处理长数据流

`decoder.feed_each(bytes_view, event => handle(event))` 逐个传递事件，不建立整块事件数组；输入为 `BytesView`，调用方可传入数据切片。
事件回调执行时，本帧的统计和缓存状态已经更新。调用方若自行保存事件，仍需要管理输出内存。
同一会话不支持回调重入：回调内再次 feed/feed_each 会返回错误，finish 是无操作；应在外层喂入结束后调用 finish。
回调不应发生 panic。原有 `feed` 保留为便利的批量收集接口。

## 接收超时后保留会话

由串口或网络适配器决定空闲超时时间，然后调用 `expire_partial()`。
有未完成帧时返回一次 `TIMED_OUT` 事件并释放逻辑缓存，但不关闭 Decoder；无半帧或已处于超限丢弃状态时返回 None。
接收恢复后，当前坏帧的剩余数据会丢弃至下一个零分隔符；之后可继续接收正常帧。丢失分隔符时可能连同下一原始帧一起丢弃，这与其他分隔符恢复策略一致。
超时事件的 end 是超时发生时已接收的位置。内部不读取时钟，便于确定性测试；finish 仍用于真正的流结束。

## 定位十六进制文本错误

`parse_hex_detailed` 返回包含 `offset`、`line`、`column` 和 `message` 的错误。
offset 从 0 开始，行列从 1 开始，位置按 Unicode 标量计数，LF（包括 CRLF 中的 LF）换行。奇数位错误指向最后未配对的半字节。
兼容 Windows 编辑器生成的单个开头 BOM；中途 BOM、非法字符仍会被拒绝。CLI 输入错误 JSON 同样包含这些位置信息。
