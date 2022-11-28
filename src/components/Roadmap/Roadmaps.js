import React from 'react'
import '../../css/Roadmaps.css'
import tri_icon from '../../images/tri.png'
import { useNavigate } from "react-router-dom"

export default function Roadmaps() {
  
  const navigate = useNavigate();
  const navigateToRoadmap1 = () => {
    navigate("/roadmaps/roadmap1");
  };
  const navigateToRoadmap2 = () => {
    navigate(`/profession.html`);
    window.location.reload();
  };
  const navigateToRoadmap3 = () => {
    navigate(`/teacher.html`);
    window.location.reload();
  };

  return (
    <div>
      <div className='rm-title'>
        컴퓨터 교육과 전공 로드맵
      </div>
      <div className='rm-middle'>
        <button className='rm-circle1' onClick={navigateToRoadmap1}>공통</button>
        <button className='rm-circle2' onClick={navigateToRoadmap2}>전문직업형</button>
        <button className='rm-circle3' onClick={navigateToRoadmap3}>교사진로형</button>

        <div className='rm-center-tri'>
          <img className="rm-tri-icon" src={tri_icon} />
          <p className='rm-center-text'>
            Computer Education Road-Map
          </p>
        </div>
      </div>
    </div>  
  )
}