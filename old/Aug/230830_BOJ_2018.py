N = int(input())

t = b = 1
sum = 0
cnt = 0

while t < N//2+2:
    if sum < N:
        sum += b
        b += 1
    if sum > N:
        sum -= t
        t += 1
    if sum == N:
        cnt += 1
        sum -= t
        t += 1

if t < N:
    cnt += 1

print(cnt)