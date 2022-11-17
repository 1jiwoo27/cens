import React from 'react'
import '../../css/Recommend.css'

export default function Recommend() {
  const recoList = {
    subjects: [
      {
        name: "과목1",
        content: "내용1",
        score: 3.3,
      },
      {
        name: "과목2",
        content: "내용2",
        score: 4.5,
      },
      {
        name: "과목3",
        content: "내용3",
        score: 4.2,
      }
    ]}

  return (
    <>
      <div className='reco-title'>
        사전 수강 과목 추천
      </div>
      <div className='reco-middle'>
      {recoList.subjects.map((el, index) => {
      return (
        <>
        {<div className="reco-card" key={index}>
          <div className='reco-card-middle'>
            <p className="reco-name">{el.name}</p>
            <p className="reco-score">{el.score}</p>
          </div>
          <p className="reco-content">{el.content}</p>
          
        </div>
        }
        </>
      )
    })}
    </div>
    </>
  );
}
  