from collections import deque

def find(stf, sty, stx):
    q = deque([[stf, sty, stx, 0]])
    
    dz = [1, -1, 0, 0, 0, 0]
    dy = [0, 0, 1, 0, -1, 0]
    dx = [0, 0, 0, 1, 0, -1]
    
    while q: 
        z, y, x, cnt = q.popleft()
        
        for i in range(6):
            nz = z + dz[i]
            ny = y + dy[i]
            nx = x + dx[i]

            if 0 <= nz < L and 0 <= ny < R and 0 <= nx < C:
                if arr[nz][ny][nx] == '#': continue
                if arr[nz][ny][nx] == 'E': return cnt + 1
                arr[nz][ny][nx] = '#'
                q.append([nz, ny, nx, cnt + 1])
    return 21e8


while 1:
    L, R, C = map(int, input().split())
    if L == 0 and R == 0 and C == 0: break
    arr = [[] for _ in range(L)]
    S = 0

    for i in range(L):
        for j in range(R+1):
            line = list(input())
            if j == R: continue
            arr[i].append(line)
    
    for k in range (L):
        for i in range(R):
            for j in range(C):
                if arr[k][i][j] == 'S':
                    S = [k, i, j]
    
    ans = find(S[0], S[1], S[2])
    
    if ans == 21e8:
        print('Trapped!')
    else:
        print(f'Escaped in {ans} minute(s).')