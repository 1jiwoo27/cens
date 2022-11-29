const express = require('express'); // 프레임 워크 받아오기 
const app = express(); // 모듈 사용 
const bodyParser = require('body-parser')
const port = 4000; // 포트 넘버 설정 

app.listen(port, () => {
  console.log('listening on '+port);
}) //서버 시작

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("노드 -> 리액트 데이터 전송이에요");
  console.log("리액트로 정보 보냈습니다!");
}); //get 방식으로 '/' 경로 사용할 경우 send와 log 표출

app.post('/api',(req,res)=>{
  jb = req.body.data;
  res.send("받았습니다~");
  console.log('잘 왔나요? ' );
  console.log(jb);
}); // post 방식으로 /api/jeongbo 경로 사용할 경우