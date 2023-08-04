tc = 1

while True:
    N = int(input())

    if N == 0:
        break

    arr = list(input().split() for _ in range(N))
    flag = 0
    
    print(f'Group {tc}')

    for i in range(N):
        for j in range(1, N):
            if arr[i][j] == 'N':
                print(f'{arr[i-j][0]} was nasty about {arr[i][0]}')
                flag += 1
    if flag == 0:
        print('Nobody was nasty')
    print('')
    tc += 1
