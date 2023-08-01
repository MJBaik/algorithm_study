T = int(input())                    # 버블소트 활용
nums = []

for t in range(T):
    nums.append(int(input()))

for i in range(len(nums)):
    for j in range(1, len(nums) - i):
        if nums[i] > nums[i + j]:
            nums[i], nums[i + j] = nums[i + j], nums[i]

for num in nums:
    print(num)