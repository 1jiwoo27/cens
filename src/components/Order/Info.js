import React, {useState} from 'react'
import '../../css/Info.css'

export default function Info() {

  const [name, setName] = useState("");
  const [credit, setCredit] = useState("");
  const [teach, setTeach] = useState("");

  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(name)
    console.log(credit)
    console.log(teach)
  }
 
  // 1. child-process모듈의 spawn 취득
  const spawn = require('child_process').spawn;

// 2. spawn을 통해 "python 파이썬파일.py" 명령어 실행
  const result = spawn('python', ['test.py']);


// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.
  result.stdout.on('data', function(data) {
      console.log(data.toString());
  }); 

// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
  result.stderr.on('data', function(data) {
      console.log(data.toString());
  });

  return (
    <form onSubmit={handleSubmit}>
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
            <div className='info-pro-lmax'/>
            <div className='info-pro-lmed'/>
            <div className='info-pro-min'/>
            <div className='info-pro-hmed'/>
            <div className='info-pro-hmax'/>
          </div>
          <div className='info-pro-type'>
            <p className='info-type'>최상</p>
            <p className='info-type'>최하</p>
          </div>
        </div>
        <div className='info-eval'>
          <div className='info-eval-ment'>
              {'>'} 선호하는 평가 유형이 무엇인가요?
          </div>
          <div className='info-eval-save'>
            <div className='info-eval-cir'>
              <div className='info-eval-lmax'/>
              <div className='info-eval-lmed'/>
              <div className='info-eval-min'/>
              <div className='info-eval-hmed'/>
              <div className='info-eval-hmax'/>
            </div>
            <button className='info-save-bt'>
              저장
              </button>
          </div>
          <div className='info-eval-type'>
            <p className='info-type'>과제</p>
            <p className='info-type'>시험</p>
          </div>
        </div>
      </div>
      <div className='info-bottom' type='submit'>
        사용자 정보를 입력해주세요.
      </div>
    </form>
  )
}

