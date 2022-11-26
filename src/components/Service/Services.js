import React from 'react'
import '../../css/Services.css'
import map_icon from '../../images/sv-map.png'
import com_icon from '../../images/sv-com.png'
import { useNavigate } from "react-router-dom"

export default function Services() {
  const navigate = useNavigate();
  const navigateToRoadmaps = () => {
    navigate("/roadmaps");
  };
  const navigateToInfo = () => {
    navigate("/info");
  };

  return (
    <div className='sv-middle'>
      <div className='sv-left'>
        <div className='sv-title'>
          Services
        </div>
        <div className='sv-ment'>
          {'>'} 원하는 서비스를 선택해주세요
        </div>
      </div>
      <div className='sv-cards'>
        <button className='sv-card' onClick={navigateToRoadmaps}>
          <img className="sv-map-icon" src={map_icon} />
          <div className='sv-type1'>
            컴퓨터교육과 전공 로드맵
            </div>
          <div className='sv-content1'>
            컴퓨터교육과 학생들 또는 컴퓨터교육과를 복수전공하는 학생들에게
            선이수 과목을 고려한 전공 로드맵 제공합니다.
          </div>
        </button>
        <button className='sv-card' onClick={navigateToInfo}>
          <img className="sv-com-icon" src={com_icon} />
          <div className='sv-type2'>
            수강 과목 추천
            </div>
          <div className='sv-content2'>
          수강할 학점 수와 과목 수를 고려하여 수강 과목과 시간표를 추천합니다. 
            </div>
        </button>
      </div>
    </div>
  )
}
