import sys
input = sys.stdin.readline

N = int(input())
lst = []

for i in range(N):
    lst.append((int(input()), i))

Max = 0
sorted_lst = sorted(lst)

for i in range(N):
    if Max < sorted_lst[i][1] - i:
        Max = sorted_lst[i][1] - i

print(Max+1)
