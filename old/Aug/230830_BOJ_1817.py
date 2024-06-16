N, M = map(int, input().split())
if N > 0:
    arr = list(map(int, input().split()))
    sum = 0
    cnt = 0

    for i in arr:
        if sum + i <= M:
            sum += i
        else:
            cnt += 1
            sum = 0
            sum += i

    if sum > 0:
        sum = 0
        cnt += 1

    print(cnt)
else:
    print(0)