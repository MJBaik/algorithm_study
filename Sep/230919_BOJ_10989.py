import sys
input = sys.stdin.readline


def findboss(x):
    if boss[x] == 0:
        boss[x] = x
        return x
    if boss[x] == x:
        return x
    ret = findboss(boss[x])
    boss[x] = ret
    return ret


def union(a, b):
    fa, fb = findboss(a), findboss(b)
    if fa == fb:
        return 1
    if fb != b:
        return 0
    boss[fb] = fa
    return 1


N, M = map(int, input().split())
boss = [0]*(N+1)

for _ in range(M):
    a, b = map(int, input().split())
    ret = union(a, b)
    print(ret)
print(boss)
