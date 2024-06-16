import sys
sys.stdin = open('input.txt')

from collections import deque

T = int(input())

def find(sty, stx):
    global field
    q = deque()
    q.append([sty, stx])

    dy = [1, 0, -1, 0]
    dx = [0, 1, 0, -1]

    while q:
        y, x = q.popleft()

        for i in range(4): 
            ny = y + dy[i]
            nx = x + dx[i]

            if 0 <= ny < N and 0 <= nx < M:
                if field[ny][nx] == 1:
                    field[ny][nx] = 0
                    q.append([ny, nx])


for tc in range(T):
    M, N, K = map(int, input().split())
    field = [[0]*M for _ in range(N)]
    cnt = 0

    for _ in range(K):
        x, y = map(int, input().split())
        field[y][x] = 1
    
    for i in range(N):
        for j in range(M):
            if field[i][j] == 1:
                field[i][j] = 0
                find(i, j)
                cnt += 1

    print(cnt)