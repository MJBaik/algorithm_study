from collections import deque

N = int(input())
M = int(input())
coms = [[] for _ in range(N+1)]
visited = [0]*(N+1)

for _ in range(M):
    a, b = map(int, input().split())
    coms[a].append(b)
    coms[b].append(a)

q = deque([1])

while q:
    now = q.popleft()
    visited[now] = 1
    
    for i in coms[now]:
        if visited[i] == 0: q.append(i)

ans = visited.count(1)

print(ans-1)