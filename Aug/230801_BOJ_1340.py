month = {'January':1, 'February':2, 'March':3, 'April':4,               # 월을 숫자로 변환하기 위한 딕셔너리 생성
         'May':5, 'June':6, 'July':7, 'August':8,
         'September':9, 'October': 10, 'November':11, 'December':12}

month_day = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10: 31, 11:30, 12:31}    #월을 일로 변환하는 딕셔너리 생성

def isLeaf(year):                                                       # 윤년 판별 함수 생성
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False

mon, day, year, time = input().split()                                  # 날짜를 입력받고 숫자 형식으로 변환

year = int(year)
mon = month[mon]
day = int(day.replace(",", ""))-1
t, m = map(int, time.split(":"))
min = t*60 + m

if isLeaf(year) == True:                                                # 윤년일 경우
    month_day[2] = 29                                                   # 2월은 29일까지로 변환
    OneYear = sum(list(month_day.values())) * 24 * 60                   # 1년을 분으로 변환
    
    day_now = day
    for x in range(1, mon):                                             # 날짜를 저장한 변수에 월을 날짜로 변환한 값 추가
        day_now += month_day[x]

    day_now *= 24                                                       # 오늘의 날짜를 분으로 변환
    day_now *= 60
    day_now += min

    print(day_now/OneYear * 100)                                        # 지금까지 흐른 분단위 시간을 1년으로 나눈다
else:
    OneYear = sum(list(month_day.values())) * 24 * 60                   # 윤년이 아닌 해에 대해서도 동일하게 진행
    
    day_now = day
    for x in range(1, mon):
        day_now += month_day[x]
    
    day_now *= 24
    day_now *= 60
    day_now += min
    
    print(day_now/OneYear * 100)