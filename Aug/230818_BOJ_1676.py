N = int(input())

def factorial(N):
    i = 0
    x = 1
    while i < N-1:
        x *= N-i
        i += 1
    return x

ret = str(factorial(N))

cnt = 0

for i in range(len(ret)-1, -1, -1):
    if ret[i] == '0':
        cnt += 1
    else:
        break

print(cnt)