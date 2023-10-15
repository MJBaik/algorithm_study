import sys

V, E = map(int, sys.stdin.readline().split())
boss = [0]*(V+1)
arr = []
cost = 0

for _ in range(E):
    a, b, c = map(int, sys.stdin.readline().split())
    arr.append([a, b, c])

arr.sort(key = lambda x: x[2])

def findboss(x): 
    if boss[x] == 0:
        return x
    
    ret = findboss(boss[x])
    boss[x] = ret
    return ret

def union(a, b):
    fa, fb = findboss(a), findboss(b)
    if fa == fb: return 0

    boss[fb] = fa
    return 1

for i in arr:
    a, b, c = i
    
    ret = union(a, b)
    if ret == 1: cost += c
    if sum(boss) == V: break

print(cost)