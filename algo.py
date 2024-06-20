import heapq
import sys

sys.stdin = open("input.txt", "r") 

V, E = map(int, input().split())
K = int(input())
node = [[] for _ in range(V+1)]
inf = int(21e8)
pri = [0]+[inf]*V
pri[K] = 0

for _ in range(E):
    u, v, w = map(int, input().split())
    node[u].append((v, w))

def dijkstra(st):
    heap = [(0, st)]

    while heap:
        cost, now = heapq.heappop(heap)

        if cost > pri[now]: continue
        for i in node[now]:
            nc = cost + i[1]
            nd = i[0]
            if nc < pri[nd]:
                pri[nd] = nc
                heapq.heappush(heap, (nc, nd))

dijkstra(K)

for i in range(1, V+1):
    if pri[i] == inf:
        print('INF')
    else:
        print(pri[i])