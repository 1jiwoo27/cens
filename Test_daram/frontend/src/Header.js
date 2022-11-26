import React from "react";
import './Header.css';
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };
  const navigateToHome = () => {
    navigate("/home");
  };
  const navigateToAboutUs = () => {
    navigate("/aboutus");
  };
  const navigateToServices = () => {
    navigate("/services");
  };

  return (
    <div className="header">
      <button className='cens' onClick={navigateToMain}>
        CENS
      </button>
      <div className='menu'>
        <button className='menu-detail' onClick={navigateToHome}>
          Home
        </button>
        <button className='menu-detail' onClick={navigateToAboutUs}>
          About Us
        </button>
        <button className='menu-detail' onClick={navigateToServices}>
          Services
        </button>
      </div>
    </div>
  );
}

export default Header;
