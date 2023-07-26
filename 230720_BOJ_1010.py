# # 230720 
# #Try1

# T = int(input())
# route = []

# def bridge(N, M):
#     global route
#     if N == 0:
#         return 
#     else:
#         for i in range(M):
#             if M - i >= N:
#                     route.append((N, M - i))
#             else:
#                 continue
#         bridge(N-1, M-1)
#         return N, M

# for _ in range(T):
#     N, M = map(int, input().split())
#     bridge(N, M)
#     print(len(route))
#     route = []


#Try2

T = int(input())

def factorial(x):
    num = 1
    for i in range (1, x+1):
        num *= i
    return num

for test in range(T):
    N, M = map(int, input().split())
    route = factorial(M) // (factorial(N) * factorial(M - N))
    print(route)
