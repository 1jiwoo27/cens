import React, { useState }  from 'react'
import '../../css/Recommend.css'
import Pagination from '../Pagination';
import { useLocation } from 'react-router-dom';


export default function Recommend() {
   // 1. useLocation 훅 취득
  const location = useLocation();
   // 2. location.state 에서 파라미터 취득
  const name = location.state.name;
  const credit = location.state.credit;
  const teach = location.state.teach;
  console.log(name)
  console.log(credit)
  console.log(teach)
  
  const spawn = require('child_process').spawn;

  const result_01 = spawn('python', ['function_print.py'], );

  result_01.stdout.on('data', (result)=>{
    console.log(result.toString());
  });

  const recoList = {
    subjects: [
      {
        type: '교직',
        name: "컴퓨터교과교육론",
        credit: 2,
        professor: "김미량",
        score: 2.46,
      },
      {
        type: '교직',
        name: "알고리즘",
        credit: 2,
        professor: "한옥영",
        score: 2.46,
      },
      {
        type: '교직',
        name: "컴퓨터교과교육론",
        credit: 2,
        professor: "김미량",
        score: 2.46,
      },
      {
        type: '교직',
        name: "자료구조",
        credit: 2,
        professor: "한옥영",
        score: 2.46,
      },
      {
        type: '교직',
        name: "컴퓨터교과교육론",
        credit: 2,
        professor: "김미량",
        score: 2.46,
      },
      {
        type: '교직',
        name: "컴퓨터교과교육론",
        credit: 2,
        professor: "김미량",
        score: 2.46,
      },
    ]}

    const [contents, setContents] = useState([]);
    const limit = 3;
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

  return (
    <>
      <div className='reco-title'>
        수강 순서 추천
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
  