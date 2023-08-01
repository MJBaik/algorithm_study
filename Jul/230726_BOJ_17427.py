# # Try1 - 시간초과
# from sys import stdin
# num = int(stdin.readline())

# def fA(A):                # A의 약수를 구하는 함수
#     fA = []
#     for i in range(1, int(A ** 0.5) + 1):
#         if A % i == 0:
#             fA.append(i)
#             if i != A // i:
#                 fA.append(A // i)
    
#     return fA

# gX = []

# for x in range(1, num + 1):   fA룰 실행하며 모두 더한다
#     FA = fA(x)
#     gX.extend(FA)

# print(sum(gX))


# Try2
from sys import stdin
num = int(stdin.readline())

SUM = 0

"""
A가 K의 배수일 때, A = nK로 나타낼 수 있음
즉, A보다 작은 K의 배수의 갯수 n = A/K로 나타낼 수 있으며, 
Testcase인 10의 경우,
(10 // 1) * 1 = 1 * 10 = 10 (1의 배수가 10개 있으므로 1 * 10 = 10)
(10 // 2) * 2 = 5 * 2 = 10 (2의 배수가 5개 있으므로 5 * 2 = 10)
(10 // 3) * 3 = 3 * 3 = 9 (3의 배수가 3개 있으므로 3 * 3 = 9)
...
상기와 같이 총합을 구한다

"""

for i in range(1, num + 1):
    SUM += (num // i) * i

print(SUM)