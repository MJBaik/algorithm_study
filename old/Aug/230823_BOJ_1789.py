S = int(input())
N = i = j = 0

while N != S:
    if N < S:
        i += 1
        N += i
    if N > S:
        N -= (N-S)
        i -= 1

print(i)
