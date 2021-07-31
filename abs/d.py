from typing import AnyStr


n = int(input())
a = map(int, input.split())

ans = 0

for i in range(n-1):
  if a[i] % 2 == 0:
    ans++
  

