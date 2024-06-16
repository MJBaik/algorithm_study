import sys

N, M = map(int, sys.stdin.readline().split())
lst = list(map(int, sys.stdin.readline().split()))

for i in range(1, len(lst)):                            # 구간합 미리 생성
    lst[i] += lst[i-1]

for m in range(M):
    a, b = map(int, sys.stdin.readline().split())
    if a == 1:
        print(lst[b-1])
    else:
        print(lst[b-1] - lst[a-2])                      # 원하는 구간을 찾아서 구간합을 뺀다