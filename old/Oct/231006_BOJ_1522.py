txt = input()
a = txt.count('a')
txt += txt
cnt = 21e8

for i in range(len(txt) - a + 1):
    temp = txt[i:i+a]
    if temp.count('b') < cnt: cnt = temp.count('b')

print(cnt)