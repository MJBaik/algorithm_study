import sys
input = sys.stdin.readline

N, D = map(int, input().split())
cost = list(range(D+1))
route = []

for _ in range(N):
    a, b, c = map(int, input().split())
    route.append((a, b, c))


for i in range(D+1):
    cost[i] = min(cost[i], cost[i-1]+1)

    for st, ed, pri in route:
        if i == st and ed <= D and cost[i]+pri < cost[ed]:
            cost[ed] = cost[i]+pri

print(cost[D])