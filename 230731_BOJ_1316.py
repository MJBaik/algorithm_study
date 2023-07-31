num = int(input())
words = []
count = 0

for i in range(num):
    words.append(list(input()))         # 입력받은 단어를 리스트로 변환하여 추가

for  word in words:
    used = []
    NO = 0

    for i in range(len(word)):          # 입력받은 단어에 대해서
        x = word.pop(0)                 # 첫 번째 글자를 지워가면서
        if x not in used:               # 사용된 글자 리스트에 없을 경우 추가
            used.append(x)
        elif x == used[-1]:             # 사용된 글자 리스트의 마지막 인덱스와 동일할 경우 스킵
            continue
        elif x in used and x != used[-1]:   # 사용된 글자 리스트에 들어가있지만 마지막으로 사용된 문자와 다를 경우
            NO += 1                         # NO 추가
    if NO == 0:
        count += 1                          # OK인 것의 갯수를 센다

print(count)