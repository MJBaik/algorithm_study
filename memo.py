N = int(input())
number_6 = 666
cnt = [1,18,244,] * 5
front = 0
i = 1
while True :
    if front % 1000 == 666 :
        i += 1000
        front +=1

    elif front % 100 == 66 :
        i += 100
        front +=1

    elif front % 10 == 6 :
        i += 10
        front +=1

    else :
        i+= 1
        front +=1

    if i > N :
        front -= 1
        back = N - i
        break
if front % 1000 == 666 :
    print(front*1000 + 1000 + back)
elif front % 100 == 66 :
    print(front*1000 + 700 + back)
elif front % 10 == 6 :
    print(front*1000 + 670 + back)
else :
    print(front*1000 + 666)