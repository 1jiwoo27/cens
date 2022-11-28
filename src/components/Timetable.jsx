import React from 'react'
import '../css/Timetable.css'


export default function Timetable() {
  return (
    <div className='tm-screen'>
      <div className='tm-title'>Time Table</div>
      <div className='tm-ment'>CENS가 추천하는 이번 학기 시간표 :</div>
      <div className='tm-largeframe'>
        <div className=''></div>
        <div className='tm-background'>
          <div className='tm-bgcolor'>
          </div>
        </div>

        <div className='realFrame'>
          <div className='tm-labels'>
            <div className='tm-monday'>Monday</div>
            <div className='tm-tuesday'>Tuesday</div>
            <div className='tm-wednesday'>Wednesday</div>
            <div className='tm-thursday'>Thursday</div>
            <div className='tm-friday'>Friday</div>
            <div className='tm-saturday'>Saturday</div>
            <div className='tm-sunday'>Sunday</div>
            <div className='times'>
              <div className='tm-9'>09:00</div>
              <div className='tm-10'>10:00</div>
              <div className='tm-11'>11:00</div>
              <div className='tm-12'>12:00</div>
              <div className='tm-13'>13:00</div>
              <div className='tm-14'>14:00</div>
              <div className='tm-15'>15:00</div>
              <div className='tm-16'>16:00</div>
              <div className='tm-17'>17:00</div>
              <div className='tm-18'>18:00</div>
              <div className='tm-19'>19:00</div>
              <div className='tm-20'>20:00</div>
            </div>
          </div>
          <div className='lecture1Card'>
            <div className='lecture1Highlight'></div>
            <div className='lecture1Name'>피지컬컴퓨팅</div>
            <div className='lecture1Location'>박천수 50213</div>
          </div>
          <div className='lecture2Card'>
            <div className='lecture2Highlight'></div>
            <div className='lecture2Name'>교육방법및교육공학</div>
            <div className='lecture2Location'>김동호 50408</div>
          </div>
          <div className='lecture3Card'>
            <div className='lecture3Highlight'></div>
            <div className='lecture3Name'>빅데이터시각화</div>
            <div className='lecture3Location'>오경선 50105</div>
          </div>

          <div className='lecture4Card'>
            <div className='lecture4Highlight'></div>
            <div className='lecture4Name'>운영체제</div>
            <div className='lecture4Location'>류은석 50213</div>
          </div>

          <div className='lecture5Card'>
            <div className='lecture5Highlight'></div>
            <div className='lecture5Name'>운영체제</div>
            <div className='lecture5Location'>류은석 50213</div>
          </div>
          <div className='lecture6Card'>
            <div className='lecture6Highlight'></div>
            <div className='lecture6Name'>교육학개론</div>
            <div className='lecture6Location'>한신일 50104</div>
          </div>
          <div className='lecture7Card'>
            <div className='lecture7Highlight'></div>
            <div className='lecture7Name'>기본프로그래밍</div>
            <div className='lecture7Location'>안용학 50213</div>
          </div>
          <div className='lecture8Card'>
            <div className='lecture8Highlight'></div>
            <div className='lecture8Name'>특수교육학개론</div>
            <div className='lecture8Location'>권승희 31506</div>
          </div>
        </div>
      </div>
    </div>
  )
}