import copy
import pandas as pd
import sys
import io

sys.stdout = io.TextIOWrapper(sys.stdout.detach(),encoding = 'utf8')
sys.stderr = io.TextIOWrapper(sys.stderr.detach(),encoding = 'utf8')
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


def start(num1,num2,num3,num4):
    # Driver Code
    d = pd.read_csv('comeduLectures_22_2.csv', encoding='utf8')
    D = pd.DataFrame(d).to_numpy()

    coding = num1 #코딩
    prefer = num2 #선호
    info = [coding,prefer]
    data = restruct(D, info)   #선호도에 따라 강의 평점 재구성

    credit = num3 #학점
    edu_credit = num4 * 2 #교직
    com_credit = credit - edu_credit

    # knapsack - 반복문으로 시간 및 강의명 중복 확인
    while True:
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
        
        for i in range(len(result)):
            for j in range(i+1, len(result)):
                #강의명 중복 확인
                if result[i][2] == result[j][2]:
                    tmp.append(result[j])
                    continue
                #시간 중복 확인
                if result[i][4][0] == result[j][4][0] and (result[i][4][1]<=result[j][4][1]<=result[i][4][2] or result[i][4][1]<=result[j][4][2]<=result[i][4][2]):
                    tmp.append(result[j])
                    continue
                if len(result[i][4])>3:
                    if result[i][4][3] == result[j][4][0] and (result[i][4][4]<=result[j][4][1]<=result[i][4][5] or result[i][4][4]<=result[j][4][2]<=result[i][4][5]):
                        tmp.append(result[j])
                        continue
                    if len(result[j][4])>3:
                        if result[i][4][3] == result[j][4][3] and (result[i][4][4]<=result[j][4][4]<=result[i][4][5] or result[i][4][4]<=result[j][4][5]<=result[i][4][5]):
                            tmp.append(result[j])
                            continue
                elif len(result[j][4])>3:
                    if result[i][4][0] == result[j][4][3] and (result[i][4][1]<=result[j][4][4]<=result[i][4][2] or result[i][4][1]<=result[j][4][5]<=result[i][4][2]):
                        tmp.append(result[j])
                        continue
        
        if len(tmp) == 0:
            break
        else:
            for t in tmp:
                if t in data:
                    data.remove(t)
            continue

    print(result,end='')
        
if __name__ == '__main__':
    start(int(sys.argv[1]),int(sys.argv[2]),int(sys.argv[3]),int(sys.argv[4]))