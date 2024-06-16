L, R = input().split()

if len(L) != len(R) or L[0] != R[0]:
    Min = 0
else:
    cnt = 0
    for i in range(len(L)):
        if L[i] == R[i]:
            if L[i] == '8':
                cnt += 1
        else: break
    Min = cnt

print(Min)