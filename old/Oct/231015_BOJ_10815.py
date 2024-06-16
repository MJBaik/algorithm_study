import sys
input = sys.stdin.readline


N = int(input()) # 상근이가 가진 카드
cards = list(map(int, input().split()))

M = int(input()) # 찾아야 하는 카드

# zip하여 원래 인덱스와 함께 배열에 저장
find = list(zip(list(map(int, input().split())), range(M)))
new = [0]*M     # 답변을 담을 배열

# 두 카드를 sort
cards.sort()
find.sort(key = lambda x:x[0])

p1 = p2 = 0

# 투포인터로 탐색하며 리스트 안에 찾는 값이 있을 경우 원래 인덱스의 답변 배열 값 증가
while 1:
    if cards[p1] == find[p2][0]:
        new[find[p2][1]] = 1
        p2 += 1
    elif cards[p1] < find[p2][0]:
        p1 += 1
    elif cards[p1] > find[p2][0]:
        p2 += 1
    if p1 == N or p2 == M: break

print(*new)