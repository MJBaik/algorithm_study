A, B = map(int, input().split())

prime = [-1, -1] + [0]*(B-1)
pn = []
cnt = 0

for i in range(B+1):            # 에라토스테네스의 체
    t = 1
    if prime[i] == 0: 
        for j in range(i, B+1, i):
            if j == i:          # j가 소수일 경우 1
                prime[j] += 1
            else:               # j가 합성수일 경우 j를 i로 나눈 값의 약수의 갯수 + 1
                prime[j] = prime[j//i] + 1

for i in range(B+1):
    if prime[i] == 1:           # 소수 리스트 생성
        pn.append(i)

for i in range(A, B+1):         # prime리스트를 체크하여 약수의 갯수가 소수일 경우 카운트 + 1
    if prime[i] in pn:
        cnt += 1

print(cnt)