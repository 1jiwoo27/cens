import React, { useState }  from 'react'
import '../../css/Recommend.css'
import Pagination from '../Pagination';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import axios from 'axios';   //axios 추가

export default function Recommend() {


  const location = useLocation();
  const name = location.state.name;
  const credit = location.state.credit;
  const teach = location.state.teach;
  const pro = location.state.pro;
  const test = location.state.test;
  const navigate = useNavigate();
  const ToTest = () => {
    navigate("/test", { state: { name: name, credit: credit, teach: teach,pro: pro, test: test}});
  };

  
  const data =  [name, credit, teach,  pro, test];
  const [data1, setData1] = useState(name+"님의 추천 과목 목록");
  console.log(data) // 유저 정보

  const client = axios.create();   // axios 기능생성   
  client.post('http://localhost:4000/api' , {data} )
  .then(function(response){
    console.log(response.data);
    // data2 => setData2(response.data); 
    alert(JSON.stringify(response.data) );
    // console.log(convertWebToString(response.data));
  })   
  const send =()=>{
    const client = axios.create();   // axios 기능생성   
    client.post('http://localhost:4000/api' , {data} )
    .then(function(response){
      console.log(response.data);
      // data2 => setData2(response.data); 
      alert(JSON.stringify(response.data) );
      // console.log(convertWebToString(response.data));
    })      
  }
  const recoList = {
    subjects: [
      {
        type: '전공일반',
        name: "빅데이터시각화",
        credit: 3,
        professor: "오경선",
        score: 4.83,
      },
      {
        type: '전공일반',
        name: "피지컬컴퓨팅",
        credit: 3,
        professor: "박천수",
        score: 4.88,
      },
      {
        type: '전공핵심',
        name: "기본프로그래밍",
        credit: 3,
        professor: "안용학",
        score: 3.63,
      },
      {
        type: '전공핵심',
        name: "운영체제",
        credit: 3,
        professor: "류은석",
        score: 3.8,
      },
      {
        type: '교직',
        name: "교육학개론",
        credit: 2,
        professor: "한신일",
        score: 4.44,
      },
      {
        type: '교직',
        name: "교육방법및교육공학",
        credit: 2,
        professor: "김동호",
        score: 4.57,
      },
      {
        type: '교직',
        name: "특수교육학개론",
        credit: 2,
        professor: "권승희",
        score: 4.57,
      },
    ]}

    const [contents, setContents] = useState([]);
    const limit = 3;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

  return (
    <>
      <div className='reco-title'>
        {data1}
      </div>
      <div className='reco-middle'>
      {recoList.subjects.slice(offset, offset + limit).map((el, index) => {
      return (
        <>
        {
        <div className="reco-card" key={index}>
          <p className="reco-type">{el.type}</p>
          <p className="reco-name">{el.name}</p>
          <div className="reco-content">
          <p className="reco-credit">- {el.credit}학점</p>
          <p className="reco-professor">- {el.professor} 교수님</p>
          <p className="reco-score">- 에타 강의평: {el.score}</p>
          </div>
         
     </div>
        
        }
        </>
      )
    })}
    </div>
    <Pagination
        total={recoList.subjects.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    
    </>
  );
}
  