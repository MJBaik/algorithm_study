def change(y, x):
    for i in range(y, y+3):
        for j in range(x, x+3):
            if orig[i][j] == '0':
                orig[i][j] = '1'
            else:
                orig[i][j] = '0'

N, M = map(int, input().split())
orig = [list(input()) for _ in range(N)]
chan = [list(input()) for _ in range(N)]

cnt = 0 

for i in range(N-2):
    for j in range(M-2):
        if orig[i][j] != chan[i][j]:
            change(i, j)
            cnt += 1

for i in range(N):
    for j in range(M):
        if orig[i][j] != chan[i][j]:
            cnt = -1

print(cnt)