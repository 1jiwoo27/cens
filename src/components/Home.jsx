import React from 'react'
import '../css/Home.css'
import homeanime from '../images/home_anime.gif'

export default function Home() {
  return (
    <div>
      <div className='home-title'>
        Computer Education 
        Navigating Service
      </div>
      <img src={homeanime} alt="" class="animated"></img>
    </div>
  )
}
