#왜 틀렸는 지 모르겠습니다...

word = list(input())
ord_lst = []
short_word = []

for i in word:
    ord_lst.append(ord(i))

one = ord_lst.index(min(ord_lst))
if one == len(ord_lst)-1:
    one = ord_lst.index(min(ord_lst[:-1]))
    for i in range(one+1, len(ord_lst) - one):
        if ord_lst[i] == min(ord_lst[one+1:len(ord_lst)-1]):
            two = i
            break
else:
    two = ord_lst[one+1:].index(min(ord_lst[one+1:])) + one + 1
    if two == len(ord_lst)-1:
        for i in range(one+1, len(ord_lst) - one):
            if ord_lst[i] == min(ord_lst[one+1:len(ord_lst)-1]):
                two = i 
                break 

short_word.append(word[: one+1])
short_word.append(word[one+1 : two+1])
short_word.append(word[two+1:])

if len(short_word[2]) == 0 and len(short_word[1]) != 1:
    short_word[2].append(short_word[1].pop())
elif len(short_word[2]) == 0 and len(short_word[1]) == 1:
    short_word[2].append(short_word[1].pop())

if len(short_word[1]) == 0 and len(short_word[0]) != 1:
    short_word[1].append(short_word[0].pop())
elif len(short_word[2]) == 0 and len(short_word[0]) == 1:
    short_word[1].append(short_word[0].pop())
    
for i in range(3):
    short_word[i] = short_word[i][::-1]

for x in short_word:
    for y in x:
        print(y, end="")