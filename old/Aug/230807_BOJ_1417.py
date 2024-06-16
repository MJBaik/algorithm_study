N = int(input())
lst = []

for i in range(N):
    x = int(input())
    lst.append(x)

def vote(lst):

    cnt = 0

    while max(lst) != lst[0]:
        maxIdx = lst.index(max(lst[1:]))
        lst[maxIdx] -= 1
        lst[0] += 1
        cnt += 1
    
    if lst[0] in lst[1:]:
        for i in range(1, N):
            if lst[0] == lst[i]:
                lst[i] -= 1
                lst[0] += 1
                cnt += 1
    
    return cnt

print(vote(lst))