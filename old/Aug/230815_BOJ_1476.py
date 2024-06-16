# 1 <= E <= 15
# 1 <= S <= 28
# 1 <= M <= 19

a, b, c = map(int, input().split())
E = S = M = 0
i = 0

while 1:
    i += 1
    E += 1
    S += 1
    M += 1

    if E == 16:
        E = 1
    if S == 29:
        S = 1
    if M == 20:
        M = 1

    if E == a and S == b and M == c:
        break

print(i)