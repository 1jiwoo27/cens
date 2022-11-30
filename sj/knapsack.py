import copy
import pandas as pd

def restruct(D, userInfo): # 강의 value 사용자에 맞게 수정
    new = [[] for d in D]
    
    for i in range(len(D)):
        # value 계산
        for j in range(6):
            new[i].append(D[i][j])
        value = (D[i][6]+5-abs(userInfo[0]-D[i][7])+5-abs(userInfo[1]-D[i][8]))
        # 시간 형식 수정
        new[i].append(value)
        new[i][4] = new[i][4].replace(':','')
        new[i][4] = new[i][4].replace('-',' ')
        new[i][4] = new[i][4].split()
        
    return new

#D.P 이용 Knapsack 함수
def knapSack(data, W):
    n = len(data)
    dp = [0 for i in range(W+1)]    # Initializing D.P. Array
    res = [[] for i in range(W+1)]  # Result array
    
    for i in range(1,n+1):  # Take First i Elements
        for w in range(W, 0, -1):   
            # Start Backward & Use data of 
            # previous computation when taking i-1 items => DP
            if data[i-1][5] <= w:  # Finding the Maximum Value
                if dp[w] < dp[w-data[i-1][5]] + data[i-1][6]:
                    res[w] = copy.copy(res[w-data[i-1][5]])
                    res[w].append(data[i-1])
                    dp[w] = dp[w-data[i-1][5]] + data[i-1][6]
    return res[W]


# Driver Code
d = pd.read_csv('comeduLectures_22_2.csv', encoding='utf8')
D = pd.DataFrame(d).to_numpy()

coding = int(input("코딩 실력 (하수1~5고수) : "))
prefer = int(input("선호 유형 (과제1~5시험) : "))
info = [coding,prefer]
data = restruct(D, info)   #선호도에 따라 강의 평점 재구성
""" 강의 목록 프린트
for i in data:
    print(i) """

credit = int(input("목표 학점 : "))
edu_credit = int(input("원하는 교직 과목 수 : ")) * 2
com_credit = credit - edu_credit

eduData = []
comData = []
for d in data:
    if d[0] == '교직':
        eduData.append(d)
    else:
        comData.append(d)

edu_result = knapSack(eduData, edu_credit)
com_result = knapSack(comData, com_credit)
result = com_result + edu_result
result.sort(reverse=True, key=lambda x:x[6])

tmp = []
""" for r in result:
    for t in result:
        if r[4][0] == t[4][0] and (r[4][1] <= t[4][1] <= r[4][2] or r[4][1] <= t[4][2] <= r[4][2]):
            tmp.append() """

for r in result:
    print(r)