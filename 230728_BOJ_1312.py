# # 가장 쉬운 방법 -> 인덱스 에러
# A, B, N = map(int, input().split())

# x = (A / B) - (A // B)
# x = list(str(x))
# print(x[N+1])


# 나눗셈 이용
A, B, N = map(int, input().split())

for i in range(N):
    A = (A % B) * 10
    result = A // B

print(result)