N, M = map(int, input().split())
lst = [[0]*101 for _ in range(101)]
cnt = 0

for n in range(N):
    y1, x1, y2, x2 = map(int, input().split())
    for i in range(y1, y2+1):
        for j in range(x1, x2+1):
            lst[i][j] += 1

for i in range(101):
    for j in range(101):
        if lst[i][j]>M:
            cnt += 1

print(cnt)