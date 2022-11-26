import React from 'react'
import '../css/Timetable.css'


export default function Timetable() {
  return (
    <div className='tm-screen'>
      <div className='tm-title'>Time Table</div>
      <div className='tm-ment'>'{'>'}' CENS가 추천하는 이번 학기 시간표</div>
      <div className='tm-largeframe'>
        <div className='tm-background'><div className='tm-bgcolor'></div></div>
        <div className='tm-2022'>2022-2</div>
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

      </div> 

    </div> 
  )
}