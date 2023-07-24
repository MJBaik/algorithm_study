# BOJ 1181 
# lambda 함수를 이용하여 복수 조건을 적용하여 풀이함

num = int(input())

lst = [str(input()) for _ in range(num)]
lst = list(set(lst))

lst.sort(key = lambda x: (len(x), x[0:]))

for i in lst:
    print(i)


# BOJ 10430
# 문제에서 제시한 조건에 맞게 작성함
A, B, C = map(int, input().split())

print((A + B) % C)
print(((A % C) + (B % C)) % C)
print((A * B) % C)
print(((A % C) * ( B % C )) % C)


# BOJ 4375

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


# BOJ 1037
# 약수가 모두 주어지므로 min*max 시 최소공배수가 나옴

num = int(input())
arr = list(map(int, input().split()))

print(min(arr) * max(arr))

