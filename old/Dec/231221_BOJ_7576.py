from collections import deque

M, N = map(int, input().split())
arr = []
blank = 0
tmts = []

def find(tmts):
    q = deque(tmts)

    dy = [1, 0, -1, 0]
    dx = [0, 1, 0, -1]
    changed = 0
    mc = 0

    while q:
        y, x, cnt = q.popleft()
        if cnt > mc: mc = cnt

        for i in range(4):
            ny = y + dy[i]
            nx = x + dx[i]

            if 0 <= ny < N and 0 <= nx < M:
                if arr[ny][nx] == '0':
                    arr[ny][nx] = '1'
                    changed += 1
                    q.append([ny, nx, cnt+1])
    return (changed, mc)

for _ in range(N):
    tmt = list(input().split())
    arr.append(tmt)

for i in range(N):
    for j in range(M):
        if arr[i][j] == '1': tmts.append([i, j, 0])
        elif arr[i][j] == '-1': blank += 1

if blank + len(tmts) == M*N:
    print(0)
else:
    ret, cnt = find(tmts)
    if blank + len(tmts) + ret == M * N:
        print(cnt)
    else:
        print(-1)