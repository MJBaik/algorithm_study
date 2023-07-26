# 230724
# 약수가 모두 주어지므로 min*max 시 최소공배수가 나옴

num = int(input())
arr = list(map(int, input().split()))

print(min(arr) * max(arr))

