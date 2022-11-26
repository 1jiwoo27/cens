import React from 'react'
import '../../css/Info.css'

export default function Info() {
  return (
    <div>
      <div className='info-title'>
        사용자 정보 입력
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
              type="text"
              placeholder="학점 수"
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
              type="text"
              placeholder="과목 수"
              />
            </div>
          </div>
        </div>
        <div className='info-program'>
          <div className='info-program-ment'>
            {'>'} 프로그래밍 실력
          </div>
        </div>
        <div className='info-eval'>
          <div className='info-eval-ment'>
              {'>'} 선호하는 평가 유형이 무엇인가요?
          </div>

        </div>
      </div>
    </div>
  )
}
