N = int(input())
nums = list(map(int, input().split()))
cal = list(map(int, input().split()))

Mi = 21e8
Ma = -21e8

def dfs(level, total):
    global Mi, Ma
    if level == N: 
        if total < Mi:
            Mi = total
        if total > Ma:
            Ma = total
        return

    for i in range(4):
        if cal[i] > 0:
            if i == 0:
                cal[i] -= 1
                dfs(level+1, total+nums[level])
                cal[i] += 1
            elif i == 1:
                cal[i] -= 1
                dfs(level+1, total-nums[level])
                cal[i] += 1
            elif i == 2:
                cal[i] -= 1
                dfs(level+1, total*nums[level])
                cal[i] += 1
            elif i == 3:
                cal[i] -= 1
                if total < 0:
                    total = -total
                    total = total // nums[level]
                    total = - total
                else: total = total // nums[level]
                dfs(level+1, total)
                cal[i] += 1

dfs(1, nums[0])
print(Ma)
print(Mi)