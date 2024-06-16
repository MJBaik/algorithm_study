N = int(input())
arr = [list(input()) for _ in range(N)]
arr2 = [[0]*N for _ in range(N)]

dy = [1, 0, -1, 0, 1, 1, -1, -1]
dx = [0, 1, 0, -1, 1, -1, 1, -1]

for i in range(N):
    for j in range(N):
        cnt = 0
        if arr[i][j] == '.':
            for k in range(8):
                ny = i + dy[k]
                nx = j + dx[k]

                if 0 <= ny < N and 0 <= nx < N:
                    if arr[ny][nx].isdigit() == True:
                        cnt += int(arr[ny][nx])
            if cnt >= 10: cnt = 'M'
            arr2[i][j] = cnt
        else:
            arr2[i][j] = '*'

for i in range(N):
    for j in range(N):
        print(arr2[i][j], end="")
    print()