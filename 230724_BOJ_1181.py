# 230724
# lambda 함수를 이용하여 복수 조건을 적용하여 풀이함

num = int(input())

lst = [str(input()) for _ in range(num)]
lst = list(set(lst))

lst.sort(key = lambda x: (len(x), x[0:]))

for i in lst:
    print(i)







