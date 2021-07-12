import math

n = int(input())
x = [list(map(int, input().split())) for i in range(n)]

ans = []

for i in range(n):
  for j in range(n):
    ans.append(math.sqrt((x[i][0] - x[j][0])**2 + (x[i][1] - x[j][1])**2))

print(round(max(ans), 6))