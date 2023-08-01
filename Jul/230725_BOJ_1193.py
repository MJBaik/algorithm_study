import sys

num = int(sys.stdin.readline())

i = 1

y = 1   # 열
x = 1   # 행

while i < num:

    if x % 2 == 1 and y == 1:   # y == 1이고 x가 홀수일 때
        x += 1                  # 한 칸 옆으로 이동
        i += 1                  # 이동한 횟수 추가
        if i == num:
            break

    if y % 2 == 0 and x == 1:   # x == 1이고 y가 짝수일 때
        y += 1                  # 한 칸 아래로 이동
        i += 1                  # 이동한 횟수 추가
        if i == num:
            break

    if y % 2 == 1 and x == 1:   # x == 1이고 y가 홀수일 때
        while y > 1:            # y가 1이 될 때까지 y-1, x+1을 반복
            y -= 1
            x += 1
            i += 1
            if i == num:        # 반복할 때마다 이동 횟수 추가
                break

    if x % 2 == 0 and y == 1:   # y == 1이고 x가 짝수일 때
        while x > 1:            # x가 1이 될 때까지 y+1, x-1을 반복
            y += 1
            x -= 1
            i += 1              # 반복할 때마다 이동 횟수 추가
            if i == num:
                break

print(f'{y}/{x}')


#GPT로 단축 - 실행 시간이 너무 오래걸려서 단축을 요청한 결과
import sys

num = int(sys.stdin.readline())

diagonal = 1            # 대각선의 갯수를 먼저 지정
while num > diagonal:   # 1 = 1 / 2 = 2, 3 / 3 = 4, 5, 6 / ... 이므로
    num -= diagonal     # 대각선의 칸 수를 늘려가며 답의 위치를 알아낸다
    diagonal += 1

if diagonal % 2 == 0:   # 대각선의 순서가 짝수번일 경우
    x = diagonal - num + 1 # 위에서부터 내려오므로 x = 대각선의 번호(원소의 최대 갯수) - 아래에서부터 센 칸의 위치 + 1
    y = num # 아래에서부터 센 칸의 위치
else:   # 대각선의 순서가 홀수번일 경우
    x = num # 아래에서부터 센 칸의 위치
    y = diagonal - num + 1 # 원소의 최대 갯수 - 칸의 위치 + 1

print(f"{y}/{x}")