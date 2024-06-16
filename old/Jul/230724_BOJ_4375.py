# 230724

while True:         # 인자의 수가 정해져있지 않으므로 try-except문 사용
    try:
        n = int(input())
    except:
        break

    i = 1

    while True:
        num = int('1' * i)
        if num % n == 0:
            print(len(str(num)))
            break
        i += 1
