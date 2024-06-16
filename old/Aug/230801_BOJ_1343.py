text = list(input().split("."))
err = 0
word = []

for i in text:
    if (len(i) % 4) % 2 != 0:
        err += 1
        break

    aa = len(i) // 4
    bb = (len(i) % 4) // 2
    word.append('AAAA'*aa + 'BB'*bb)

if err != 0:
    print(-1)
else:
    print(".".join(word))