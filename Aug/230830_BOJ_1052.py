N, K = map(int, input().split())

total = 0
size = 1

while N > K:
    if N % 2 == 1:
        total += size
        size *= 2
        N += 1
        N //= 2
    else:
        N //= 2
        size *= 2

print(total)