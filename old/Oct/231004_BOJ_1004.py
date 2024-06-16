import sys
input = sys.stdin.readline

N, M = map(int, input().split())
words = []
tot = 0

for _ in range(N):
    txt = sys.stdin.readline().strip()
    tot += len(txt)
    words.append(txt)

n = (M-tot)//(N-1)
m = (M-tot)%(N-1)

p = 1
for i in range(N-1):
    words.insert(p, '_'*n)
    p += 2

while m > 0:
    if len(words) < 2: break
    p = 2
    while p < len(words):
        if p >= len(words): break
        if words[p][0].islower():
            words[p-1] += '_'
            m -= 1
        p += 2
        if m == 0: break
    if m == 0: break
    p = len(words)-1
    while p > 0:
        if p <= 0: break
        if words[p][0].isupper():
            words[p-1] += '_'
            m -= 1
        p -= 2
        if m == 0: break

print("".join(words))
