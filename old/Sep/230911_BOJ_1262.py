N, R1, C1, R2, C2 = map(int, input().split())

for i in range(R1, R2+1):
    for j in range(C1, C2+1):
        nowX = j // ((2*N)-1)
        nowY = i // ((2*N)-1)
        mX = (((2*N)-1)*nowX) + N-1
        mY = (((2*N)-1)*nowY) + N-1

        if abs(j-mX) + abs(i-mY) >= N:
            print('.', end="")
        else:
            if ord('a') + abs(j-mX) + abs(i-mY) > ord('z'):
                   print(chr(ord('a') + abs(j-mX) + abs(i-mY) - (26 * ((abs(j-mX) + abs(i-mY))//26))), end="")
            else: print(chr(ord('a') + abs(j-mX) + abs(i-mY)), end="")
    print()