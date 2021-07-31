n = int(input())
p = list(map(int, input().split()))

t = []

for i in range(n):
  if p[i] != i + 1:
    t.append[i]
  
if t.len() != 2:
  print('No')

p[t[0]] = p[t[1]]
p[t[1]] = p[t[0]]

ans = 0

for i in range(n):
  if p[i] == n + 1:
    ans += 1

if ans == n+1:
  print('Yes')

if 0 < ans & n+1 > ans:
  print('No')
