num = int(input())
score = list(map(int, input().split()))

for i in range(num):                                # 버블 정렬
    for j in range(1, num-i):
        if score[i] < score[i + j]:
            score[i], score[i + j] = score[i + j], score[i]

MAX = score[0]                                      # 최고값을 찾는다

for i in range(num):                                # 점수 재정의
    score[i] = (score[i] / MAX) * 100

Sum = 0                                             # 점수의 합계를 구한다
for i in score:
    Sum += i

new_average = Sum / num                             # 평균을 구한다

print(new_average)