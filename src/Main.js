import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main">
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/info">
          <p>Info</p>
        </Link>
        <Link to="/roadmaps">
          <p>Roadmaps</p>
        </Link>
        <Link to="/services">
          <p>Services</p>
        </Link>
        <Link to="/timetable">
          <p>Timetable</p>
        </Link>
      </div>
    </>
  );
}

export default Main;
