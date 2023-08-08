N = int(input())
K = int(input())

lst = [1, 1] + [0]*(N-1)

def cou(x, K):
    global lst
    i = 2
    while i <= x and i <= K and x < (N+1):
        if x % i == 0 and lst[x // i] == 1:
            lst[x] = 1
            break
        else:
            i += 1

cnt = 0

for i in range(2, N+1):
    cou(i, K)

print(lst[1:].count(1))