import React, {useState} from 'react'
import '../../css/Info.css'
import { useNavigate } from "react-router-dom"

export default function Info() {

  const navigate = useNavigate();
  const navigateToRecommend = () => {
    navigate("/test", { state: { name: name, credit: credit, teach: teach }});
    console.log(name)
    console.log(credit)
    console.log(teach)

  };

  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [teach, setTeach] = useState("");

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
              placeholder="이름"
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
              placeholder="학점 수"
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
              placeholder="과목 수"
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
          <div className='info-pro-cir'>
            <button className='info-pro-lmax' type='button'/>
            <button className='info-pro-lmed' type='button'/>
            <button className='info-pro-min' type='button'/>
            <button className='info-pro-hmed' type='button'/>
            <button className='info-pro-hmax' type='button'/>
          </div>
          <div className='info-pro-type'>
            <p className='info-type'>최하</p>
            <p className='info-type'>최상</p>
          </div>
        </div>
        <div className='info-eval'>
          <div className='info-eval-ment'>
              {'>'} 선호하는 평가 유형이 무엇인가요?
          </div>
          <div className='info-eval-save'>
            <div className='info-eval-cir'>
              <button className='info-eval-lmax' type='button'/>
              <button className='info-eval-lmed' type='button'/>
              <button className='info-eval-min' type='button'/>
              <button className='info-eval-hmed' type='button'/>
              <button className='info-eval-hmax' type='button'/>
            </div>
            <button className='info-save-bt' type='submit' onClick={navigateToRecommend}>
              저장
              </button>
          </div>
          <div className='info-eval-type'>
            <p className='info-type'>과제</p>
            <p className='info-type'>시험</p>
          </div>
        </div>
      </div>
      <div className='info-bottom'>
        사용자 정보를 입력해주세요.
      </div>
    </div>
  )
}

