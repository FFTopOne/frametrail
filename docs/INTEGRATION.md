# 设备接入指南

## 发送端容量检查

发送端与接收端须使用同一 `max_encoded`，它不包含末尾零分隔符。
调用 `encode_frame_checked(payload, max_encoded=4096)`，超出接收端容量时返回错误，避免发送必然被拒收的帧。
`max_frame_size(payload_length)` 提供包含 CRC、COBS 最坏开销和分隔符的保守线长上限，用于分配发送缓冲区。
该上限不一定等于实际编码长度；不要用上限代替实际帧的字节数。
