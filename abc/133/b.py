import math

n, d = map(int, input().split(' '))
x = [list(map(int, input().split())) for i in range(n)]

sum = 0
ans = 0

for i in range(n - 1):
  for j in range(i + 1, i + 2):
    for k in range(d):
      sum += (x[i][k] - x[j][k])**2
    if (math.sqrt(sum) % 1 == 0):
      ans+=1

    sum = 0

print(ans)