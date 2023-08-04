N = int(input())

st, ed = 1, 1
total = 0
cnt = 1

while ed != N:
    if total > N:
        total -= st
        st += 1
    elif total <= N:
        total += ed
        ed += 1
    if total == N:
        cnt += 1

print(cnt)