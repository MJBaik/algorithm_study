#에라스토테네스의 체 활용

M, N = map(int, input().split())
arr = [True] * (N + 1)

n = int(N ** 0.5)
for i in range(2, n + 1):
    if arr[i] == True:
        for l in range(i+i, N + 1, i):
            arr[l] = False

for x in range(max(2, M), N + 1):
    if arr[x] == True:
        print(x)