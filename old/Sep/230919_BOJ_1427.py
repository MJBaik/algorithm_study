N = int(input())
nums = list(map(int, input().split()))
nums.sort()

for i in range(1, N):
    nums[i] += nums[i-1]

print(sum(nums))
