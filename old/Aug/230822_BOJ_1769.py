N = list(map(int, list(input())))
c = 0

while len(N)>1:
    total = 0
    for i in range(len(N)):
        total += N[i]

    N = list(map(int, list(str(total))))
    c += 1

print(c)
if N[0] % 3 == 0:
    print("YES")
else:
    print("NO")