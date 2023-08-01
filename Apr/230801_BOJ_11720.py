num = int(input())
nums = int(input())

Sum = 0

for i in range(num):
    Sum += nums % 10
    nums = nums // 10

print(Sum)