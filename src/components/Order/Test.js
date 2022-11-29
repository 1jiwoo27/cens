import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';   //axios 추가
import { send } from "process";
import { response } from "express";

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

  console.log(data)

  function clicked() {
    fetch("http://localhost:4000/")
      .then((res) => res.text())
      .then((data) => setData(data));
  };
  
  const send =()=>{
    const client = axios.create();   // axios 기능생성   
  client.post('http://localhost:4000/api' , {data} );   //axios 기능을 통한 post 사용및 name 값 전달.
  
}

  return (
    <>
      <h1>{data}</h1>
      <button onClick={clicked}>노드에서 리액트 정보 체크</button>
      <button onClick={()=>{send();}}>리액트에서 노드 정보 체크</button>
     </>
  );
}