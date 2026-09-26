"""Package an already-built CLI, validate its extraction, and write SHA-256.

Run after the release build and tests. Only allowlisted files are distributed.
ZIP entry ordering, timestamps and modes are fixed for identical-input builds.
"""
import hashlib
import json
from pathlib import Path
import re
import subprocess
import tempfile
import zipfile

ROOT = Path(__file__).resolve().parents[1]


def main():
    version = re.search(r'^version = "([0-9.]+)"', (ROOT / 'moon.mod').read_text(encoding='utf-8'), re.M).group(1)
    files = {
        'dist/frametrail.cjs': (ROOT / '_build/js/release/build/cmd/main/main.js').read_bytes(),
    }
    for name in ['README.md', 'LICENSE', 'THIRD_PARTY_NOTICES.md', 'RUN_DEMO.cmd', 'docs/INTEGRATION.md']:
        files[name] = (ROOT / name).read_bytes()
    for path in sorted((ROOT / 'examples').glob('*.hex')):
        files[path.relative_to(ROOT).as_posix()] = path.read_bytes()
    files['SHA256SUMS'] = ''.join(f'{hashlib.sha256(content).hexdigest()}  {name}\n' for name, content in sorted(files.items())).encode('ascii')
    out = ROOT / '_build' / 'release'
    out.mkdir(parents=True, exist_ok=True)
    archive = out / f'frametrail-{version}.zip'
    with zipfile.ZipFile(archive, 'w', compression=zipfile.ZIP_DEFLATED) as bundle:
        for name, content in sorted(files.items()):
            entry = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            entry.compress_type = zipfile.ZIP_DEFLATED
            entry.create_system = 3
            entry.external_attr = 0o100644 << 16
            bundle.writestr(entry, content)
    with tempfile.TemporaryDirectory() as directory:
        extracted = Path(directory)
        with zipfile.ZipFile(archive) as bundle:
            bundle.extractall(extracted)
        for line in (extracted / 'SHA256SUMS').read_text().splitlines():
            expected, name = line.split('  ', 1)
            assert hashlib.sha256((extracted / name).read_bytes()).hexdigest() == expected, name
        for name, expected in [('clean.hex', 0), ('mixed.hex', 1)]:
            result = subprocess.run(['node', 'dist/frametrail.cjs', 'replay', f'examples/{name}', '3'], cwd=extracted, capture_output=True, text=True, encoding='utf-8')
            assert result.returncode == expected, result.stderr
            report = json.loads(result.stdout)
            assert report['stats']['frames'] == '2'
        help_text = subprocess.check_output(['node', 'dist/frametrail.cjs', 'help'], cwd=extracted, text=True, encoding='utf-8')
        assert f'FrameTrail {version}' in help_text, 'module and CLI versions disagree'
    digest = hashlib.sha256(archive.read_bytes()).hexdigest()
    archive.with_suffix('.zip.sha256').write_text(f'{digest}  {archive.name}\n', encoding='ascii', newline='\n')
    print(f'PASS: extracted release smoke checks and SHA-256 manifest: {archive.name}')


if __name__ == '__main__':
    main()
