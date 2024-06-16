txt = input()
alpha = [0]*26
n = len(txt)
word = [0]*n
cnt = 0

for i in txt:
    num = ord(i)-ord('a')
    alpha[num] += 1


def find(lv):
    global cnt
    if lv == n:
        cnt += 1
        return

    for i in range(26):
        if alpha[i] > 0:
            if lv > 0 and word[lv-1] == i:
                continue
            alpha[i] -= 1
            word[lv] = i
            find(lv+1)
            alpha[i] += 1


find(0)

print(cnt)
