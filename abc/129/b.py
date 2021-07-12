N = int(input())
w = list(map(int, input().split()))

b = 0
s = 0
ans = []
for i in range(1, N):
  for j in range(i):
    b += w[j]
  for t in range(i, N):
    s += w[t]
  ans.append(abs(b - s))

print(min(ans))