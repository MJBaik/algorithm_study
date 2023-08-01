# 시간초과
import sys

def prime_list(x):
    arr = [True] * (x + 1)
    y = int(x ** 0.5)
    
    for i in range(2, y + 1):
        if arr[i]:
            for l in range(i + i, x + 1, i):
                arr[l] = False
                
    return [i for i in range(2, x + 1) if arr[i]]

N = []

while True:
    x = int(sys.stdin.readline())
    if x != 0:
        N.append(x)
    else:
        break

MAX = prime_list(max(N))

for n in N:
    ok = 0

    for i in range(1, len(MAX)):
        if MAX[i] < n and (n - MAX[i]) in MAX:
            print(f'{n} = {MAX[i]} + {n - MAX[i]}')
            ok += 1
            break
    
    if ok == 0:
        print("Goldbach's conjecture is wrong.")

