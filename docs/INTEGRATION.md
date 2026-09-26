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
