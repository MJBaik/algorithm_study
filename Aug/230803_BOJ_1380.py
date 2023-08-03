x = 0

while True:
    N = int(input())
    
    if N == 0:
        break
    x += 1
    name = []

    for i in range(N):
        nm = str(input())
        name.append(nm)

    earring = []

    for i in range(2*N-1):
        a, b = input().split()
        a = int(a)
        earring.append(a)

    for i in range(1, N+1):
        if earring.count(i) % 2 == 1:
            print(f'{x} {name[i-1]}')