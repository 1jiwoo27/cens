import React, {useState} from 'react'
import '../../css/Info.css'
import { useNavigate } from "react-router-dom"

export default function Info() {

  const navigate = useNavigate();
  const navigateToRecommend = () => {
    navigate("/recommend", { state: { name: name, credit: credit, teach: teach, pro: pro, test: test}});
  };

  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [teach, setTeach] = useState("");
  const [pro, setPro] = useState("");
  const [test, setTest] = useState("");

  return (
    <div>
      <div className='info-title'>
        수강 과목 추천
      </div>
      <div className='info-box'>
        <div className='info-name'>
          <div className='info-name-ment'>
            {'>'} 이름
          </div>
          <div className='info-name-box'>
            <input
              className="info-name-input"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            </div>
        </div>
        <div className='info-num'>
          <div className='info-credit'>
            <div className='info-credit-ment'>
              {'>'} 총 희망 학점 수
            </div>
            <div className='info-credit-box'>
              <input
              className="info-credit-input"
              type="number"
              placeholder="Credit"
              value={credit}
              onChange={e => setCredit(e.target.value)}
              />
            </div>
          </div>
          <div className='info-teach'>
            <div className='info-teach-ment'>
              {'>'} 희망 교직 과목 수
            </div>
            <div className='info-teach-box'>
              <input
              className="info-teach-input"
              type="number"
              placeholder="Subject"
              value={teach}
              onChange={e => setTeach(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='info-pro'>
          <div className='info-pro-ment'>
            {'>'} 프로그래밍 실력
          </div>
          <div className='info-pro-box'>
              <input
              className="info-pro-input"
              type="number"
              placeholder="0~5"
              value={pro}
              onChange={e => setPro(e.target.value)}
              />
            </div>
        </div>
        <div className='info-eval'>
          <div className='info-eval-ment'>
              {'>'} 시험에 대한 선호도는?
          </div>
          <div className='info-eval-box'>
              <input
              className="info-eval-input"
              type="number"
              placeholder="0~5"
              value={test}
              onChange={e => setTest(e.target.value)}
              />
            </div>
          </div>
          <button className='info-save-bt' type='submit' onClick={navigateToRecommend}>
              저장
          </button>
      </div>
      <div className='info-bottom'>
        사용자 정보를 입력해주세요.
      </div>
    </div>
  )
}
