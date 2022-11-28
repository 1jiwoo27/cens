import React from 'react'
import '../css/Home.css'
import homeanime from '../images/home_anime.gif'

export default function Home() {
  return (
    <>
    <div className='home-middle'>
      <div className='home-title'>
        Computer Education 
        Navigating Service
      </div>
      <img src={homeanime} alt="" className="animated"></img>
      </div>
    <div className='copy-right'>
      Copyright @ CEPO All rights reserved
    </div>
    </>
  )
}
