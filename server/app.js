const express = require('express'); // 프레임 워크 받아오기 
const app = express(); // 모듈 사용 
const bodyParser = require('body-parser')
const port = 4000; // 포트 넘버 설정 
const spawn = require('child_process').spawn;
const iconv = require('iconv-lite');

var PythonShell = require('python-shell');

app.listen(port, () => {
  console.log('listening on '+port);
}) //서버 시작

const cors = require("cors");
const { json } = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("노드 -> 리액트 데이터 전송이에요");
  console.log("리액트로 정보 보냈습니다!");
}); //get 방식으로 '/' 경로 사용할 경우 send와 log 표출

app.post('/api',(req,res)=>{
  let data
  let jsonToSend = {};
  userdata = req.body.data;
  const result = spawn('python', ['knapsack.py', userdata[3],userdata[4],userdata[1],userdata[2]]);

  result.stdout.on('data', (dataToSend) => {
      const data = iconv.decode(dataToSend,'euc-kr');
      console.log(data);
      //console.log(dataToSend.toString("utf8"));
      console.log("stdout");
      data += dataToSend;
      jsonToSend["success"]= true;
      jsonToSend["data"] = data;
      //return res.send(data.toString());
  });

  result.stderr.on("data", (dataToSend) => {
    console.log("stderr");
    //클라이언트에 의도한대로 진행이 안됐음을 알려야 하므로, json파일을 다음과 같이 설정했다.
    jsonToSend["success"] = false;
    jsonToSend["err_code"] = -1;
    jsonToSend["err_msg"] = "불러오기에 실패했습니다. 다시 시도해주세요!";
    jsonToSend["err_content"] = dataToSend.toString("euc-kr");
    
    //디버깅 전에 각 result.stderr, stdout 함수들마다 res.json 응답을 생성했었는데,
    //ERR_HTTP_HEADERS_SENT 에러가 발생해서 응답은 result.on에서 한번 보내는 것으로 디버깅했다.
    return;
  });
    result.on("close", (code) => {
      console.log("close");
      if (code !== 0) {
        console.log(`child process close all stdio with code ${code}`);
      }
      //code가 0이라면 클라이언트에 json을 보낸다.
      res.json(jsonToSend);
      return;
    });
  console.log(jsonToSend)
  console.log('잘 왔나요? ' );
  console.log(userdata);
}); 