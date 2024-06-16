N = int(input())
six = []

key = '666'
cnt = 0
i = 0

while cnt < N:
    if key in str(i):   # 숫자를 1씩 증가시켜가며
        six.append(i)   # 숫자 안에 666이 있을 경우 카운트
        cnt += 1        # 카운트가 N이 될 때까지 반복한다
    i += 1

print(six[N-1])