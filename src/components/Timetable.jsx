import React from 'react'
import '../css/Timetable.css'


export default function Timetable() {
  return (
    <div className='tm-screen'>
      <div className='tm-title'>Time Table</div>
      <div className='tm-ment'>{'>'} CENS가 추천하는 이번 학기 시간표</div>
      <div className='tm-largeframe'>
        <div className=''></div>
        <div className='tm-background'><div className='tm-bgcolor'></div></div>
        <div className='tm-labels'>
          <div className='tm-monday'>Monday</div>
          <div className='tm-tuesday'>Tuesday</div>
          <div className='tm-wednesday'>Wednesday</div>
          <div className='tm-thursday'>Thursday</div>
          <div className='tm-friday'>Friday</div>
          <div className='tm-saturday'>Saturday</div>
          <div className='tm-sunday'>Sunday</div>
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
        <div className='lecture1Card'>
          <div className='lecture1Highlight'></div>
          <div className='lecture1Name'>강의명1</div>
          <div className='lecture1Location'>00000</div>
        </div>
        <div className='lecture2Card'>
          <div className='lecture2Highlight'></div>
          <div className='lecture2Name'>강의명2</div>
          <div className='lecture2Location'>11111</div>
        </div>
        <div className='lecture3Card'>
          <div className='lecture3Highlight'></div>
          <div className='lecture3Name'>강의명3</div>
          <div className='lecture3Location'>22222</div>
        </div>
        <div className='lecture4Card'>
          <div className='lecture4Highlight'></div>
          <div className='lecture4Name'>강의명4</div>
          <div className='lecture4Location'>22222</div>
        </div>
        <div className='lecture5Card'>
          <div className='lecture5Highlight'></div>
          <div className='lecture5Name'>강의명5</div>
          <div className='lecture5Location'>22222</div>
        </div>
        <div className='lecture6Card'>
          <div className='lecture6Highlight'></div>
          <div className='lecture6Name'>강의명6</div>
          <div className='lecture6Location'>22222</div>
        </div>
      </div>
    </div>
  )
}