# 230724
# 문제에서 제시한 조건에 맞게 작성함
A, B, C = map(int, input().split())

print((A + B) % C)
print(((A % C) + (B % C)) % C)
print((A * B) % C)
print(((A % C) * ( B % C )) % C)