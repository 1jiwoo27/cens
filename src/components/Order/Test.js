import React, {useState} from "react";
import { useLocation } from "react-router-dom";

export default function Test() {
  const location = useLocation();
  const name = location.state.name;
  const credit = location.state.credit;
  const teach = location.state.teach;
  
  console.log(name)
  console.log(credit)
  console.log(teach)  
  
  const [data, setData] = useState("이름: " + name +" 학점: "+ credit+" 교직: " 
   +teach);

  function clicked() {
    fetch("http://localhost:4000/")
      .then((res) => res.text())
      .then((data) => setData(data));
  }
  

  function start() {
    fetch("http://localhost:4000/")
      .then((res) => res.text())
      .then((data) => setData(data));
  }
  
  return (
    <>
      <h1>{data}</h1>
      <button onClick={clicked}>추천 과목 출력하기</button>
      <button onClick={start}>추천 과목 냅색하기</button>
     </>
  );
}