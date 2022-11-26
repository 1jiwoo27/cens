from flask import Flask
import copy
import pandas as pd
import json
from flask import make_response

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

@app.route('/')
def home():

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
    d = pd.read_csv('comeduLectures_22_2.csv',encoding='UTF-8')
    D = pd.DataFrame(d).to_numpy()

    coding = 3
    prefer = 3
    userInfo = [coding,prefer]
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
    data = new 


    credit = 20
    edu_credit = 4
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
    r = json.dumps(result, ensure_ascii=False, indent=4)
    res = make_response(r)
    return res
    

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)