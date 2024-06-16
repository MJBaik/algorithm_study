N = list(map(int, input()))
bucket = [0]*10
new_lst = [0]*len(N)

for i in N:               # 버킷 생성
    bucket[i] += 1

for i in range(1, 10):    # 누적합 구하기
    bucket[i] += bucket[i-1]

for i in range(len(N)):   # 버킷의 누적합을 이용한 sort
    idx = N[i]
    bucket[idx] -= 1
    new_lst[len(new_lst)-1-(bucket[idx])] = idx # 역순

for i in new_lst:
    print(i, end="")