# 동전1 (DP, js와 동일코드)
#  https://www.acmicpc.net/problem/2293

n, k = map(int, input().split())
dp = [0]*(k+1)
dp[0] = 1

for _ in range(n):
    temp = int(input())

    for j in range(temp, k+1):
        dp[j] += dp[j - temp]

print(dp[k])