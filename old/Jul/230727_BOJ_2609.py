import sys
a, b = map(int, sys.stdin.readline().split())
ab = a * b

while b > 0:
    a, b = b, (a % b)

print(a)
print(int(ab / a))