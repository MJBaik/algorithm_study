yyyy, mm, dd = map(int, input().split())
yyyy2, mm2, dd2 = map(int, input().split())

if yyyy2 > yyyy + 1000:
    print('gg')
elif yyyy2 == yyyy + 1000 and mm2 > mm:
    print('gg')
elif yyyy2 == yyyy + 1000 and mm2 == mm and dd2 >= dd:
    print('gg')
else:
    def is_leaf(year):
        if year % 400 == 0:
            is_leaf = True
        elif year % 100 == 0:
            is_leaf = False
        elif year % 4 == 0:
            is_leaf = True
        else:
            is_leaf = False

        if is_leaf == True:
            month = {1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 
                7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
            
        elif is_leaf == False:
            month = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30,
            7:31, 8:31, 9:30, 10:31, 11:30, 12:31}
        
        return month

    month = is_leaf(yyyy)

    day = sum(list(month.values()))

    this_month = month.get(mm) - dd
    rest_day = 0

    if yyyy == yyyy2 and mm == mm2:
        rest_day = dd2 - dd
    elif yyyy == yyyy2 and mm != mm2:
        rest_day = this_month
        for mon in range(mm + 1, mm2):
            rest_day += month.get(mon)
        rest_day += dd2
    elif yyyy != yyyy2:
        rest_day = this_month
        for mon in range(mm + 1, 13):
            rest_day += month.get(mon)
        for next_year in range(yyyy+1, yyyy2):
            month = is_leaf(next_year)
            day = sum(list(month.values()))
            rest_day += day
        month = is_leaf(yyyy2)
        for mon in range(1, mm2):
            rest_day += month.get(mon)
        rest_day += dd2

    print(f'D-{rest_day}')