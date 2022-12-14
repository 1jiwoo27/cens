import React from 'react'
import '../css/AboutUs.css'
import ms from '../images/ms.png'
import jw from '../images/jw.png'
import sj from '../images/sj.png'
import hj from '../images/hj.png'



export default function Aboutus(){

    return(
        <div className='ab-middle'>

            <div className='ab-left'>
                <div className='ab-title'>
                About us
                </div>

                <div className='fade-in'>
                    <div className='ab-cardsframe'>
                        <div className='ab-card'>

                            <img className='ab-pic' src={ms} alt="없음" />
                            <div className='ab-name'>김민서</div>
                            <div className='ab-role'>Main Back-End Engineer</div>

                        </div>

                        <div className='ab-card'>
                            <img className='ab-pic' src={jw} alt="없음" />
                            <div className='ab-name'>엄지우</div>
                            <div className='ab-role'>Main Front-End Engineer</div>
                        </div>

                        <div className='ab-card'>

                            <img className='ab-pic' src={sj} alt="없음" />
                            <div className='ab-name'>윤상진</div>
                            <div className='ab-role'>Sub Front-End Engineer</div>

                        </div>

                        <div className='ab-card'>

                            <img className='ab-pic' src={hj} alt="없음" />
                            <div className='ab-name'>전혜진</div>
                            <div className='ab-role'>Sub Back-End Engineer</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}