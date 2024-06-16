N = int(input())
arr = [list(input()) for _ in range(N)]

garo = 0
sero = 0

for i in range(N):
    cnt = 0
    for j in range(N):
        if arr[i][j] == '.':
            cnt += 1
        elif arr[i][j] == 'X':
            if cnt > 1:
                garo += 1
                cnt = 0
            elif cnt <= 1:
                cnt = 0
    if cnt > 1:
        garo += 1

for j in range(N):
    cnt = 0
    for i in range(N):
        if arr[i][j] == '.':
            cnt += 1
        elif arr[i][j] == 'X':
            if cnt > 1:
                sero += 1
                cnt = 0
            elif cnt <= 1:
                cnt = 0
    if cnt > 1:
        sero += 1

print(garo, sero)