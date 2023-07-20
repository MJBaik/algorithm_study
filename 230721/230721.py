#BOJ 1094

x = int(input())
stick = 64                                          # 막대기의 길이
stick_list = []                                     

while stick >= 1:                                   # 막대기를 반으로 잘라가며 리스트에 추가한다
    stick_list.append(stick)
    stick = stick // 2


count = 0                                           # 막대기를 이어붙인 횟수
new_stick = 0                                       # 이어붙인 막대기의 길이

for i in range(7):
    if new_stick == x:
        break
    elif new_stick + stick_list[i] > x:             # 막대기를 큰 것부터 이어붙여,
        continue                                    # 붙인 막대기가 x보다 클 경우 제외
    elif new_stick + stick_list[i] <= x:            # x보다 작을 경우 그 막대에 새로운 피스를 덧붙인다
        new_stick += stick_list[i]
        count += 1

print(count)
