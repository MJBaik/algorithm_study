def four(y, x):
    global n

    for i in range(2):
        for j in range(2):
            arr[y+i][x+j] = n
            if y+i == r and x+j == c: return
            n += 1


def sixt(y, x):
    global n

    for i in range(2):
        for j in range(2):
            four(y+i*2, x+j*2)

N, r, c = map(int, input().split())
arr = [[0]*(2**N) for _ in range(2**N)]

n = 0

while n < N:
    for i in range((2**N)//4):
        for j in range((2**N)//4):
            sixt(i*4, j*4)

for i in arr:
    print(i)
print(arr[r][c])    