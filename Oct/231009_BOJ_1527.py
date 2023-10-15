A, B = map(int, input().split())
nums = []
cnt = 0

def find(num):
    global cnt
    if len(num) > len(str(B)):
        return
    
    if num != '' and A <= int(num) <= B:
        nums.append(num)
        cnt += 1

    n = ['4', '7']
    used = [0, 0]

    for i in range(2):
        if used[i] == 0:
            used[i] = 1
            find(num+n[i])

find('')

print(cnt)