#!/usr/bin/python3
# yeah yeah this is much longer than the shell script version but it's cross-platform
import builtins
from pathlib import Path

# stolen from https://stackoverflow.com/questions/845058/how-to-get-line-count-of-a-large-file-cheaply-in-python/68385697#68385697
def buf_count_newlines_gen(fname):
    def _make_gen(reader):
        b = reader(2 ** 16)
        while b:
            yield b
            b = reader(2 ** 16)

    with open(fname, "rb") as f:
        count = sum(buf.count(b"\n") for buf in _make_gen(f.raw.read))
    return count

glob = '**/*.*s*'
p = Path('../src')
filesToCount = [path for path in p.glob(glob) if path.is_file()]
lineCntSum = 0
for file in filesToCount:
  count = buf_count_newlines_gen(file)
  lineCntSum += count 
  print('{:>5} {}'.format(count, file))
print('{:>5} total'.format(lineCntSum))