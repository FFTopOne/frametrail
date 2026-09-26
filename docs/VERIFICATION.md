# 本地验证记录

验证日期：2026-09-26。环境：Windows，Node.js v24.15.0。远程 GitHub CI 尚未运行。

## moon info

退出码：0

```text
Finished. moon: ran 2 tasks, now up to date

```

## moon fmt

退出码：0

```text
Finished. moon: ran 9 tasks, now up to date

```

## moon fmt --check

退出码：0

```text
Finished. moon: ran 9 tasks, now up to date

```

## moon check --target wasm-gc --deny-warn

退出码：0

```text
Finished. moon: ran 2 tasks, now up to date

```

## moon check --target js --deny-warn

退出码：0

```text
Finished. moon: ran 4 tasks, now up to date

```

## moon test --target wasm-gc --deny-warn

退出码：0

```text
Total tests: 25, passed: 25, failed: 0.

```

## moon test --target js --deny-warn

退出码：0

```text
Total tests: 25, passed: 25, failed: 0.

```

## moon build --target js --release --deny-warn

退出码：0

```text
Typescript declaration file is only supported for ESM format for now
Finished. moon: ran 3 tasks, now up to date

```

## 独立参考与分发文件检查

命令：`python scripts/verify_reference.py dist/frametrail.cjs`

```text
PASS: 15 independent bidirectional wire vectors; CLI clean/corrupt/error exits; file I/O and size limit; chunk invariance.

```
