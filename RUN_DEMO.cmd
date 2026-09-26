@echo off
cd /d "%~dp0"
node dist\frametrail.cjs demo
echo.
echo Expected result: 2 frames, 1 CRC_MISMATCH. Exit code 1 is expected.
pause
