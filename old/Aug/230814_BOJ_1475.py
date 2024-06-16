bucket = [0]*10
lst = list(map(int, list(input())))

for i in lst:
    bucket[i] += 1                  # 버킷에 숫자 추가

if (bucket[6]+bucket[9]) % 2 == 0:  # 6과 9의 갯수 카운트
    bucket[6] = bucket[9] = (bucket[6]+bucket[9])//2
else:
    bucket[6] = bucket[9] = (bucket[6] + bucket[9])//2
    bucket[6] += 1

print(max(bucket))                  # max값 출력