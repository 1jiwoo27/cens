
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';   //axios 추가

export default function Test() {
  const location = useLocation();
  const name = location.state.name;
  const credit = location.state.credit;
  const teach = location.state.teach;
  const pro = location.state.pro;
  const test = location.state.test;
  
  console.log(name)
  console.log(credit)
  console.log(teach)  
  console.log(pro)
  console.log(test)  
  
  
  const data =  [name, credit, teach,  pro, test];
  const [data1, setData1] = useState("노드에서 받을 정보");
  const [data2, setData2] = useState("리액트 -> 노드 성공했는지");


  console.log(data) // 유저 정보

  function clicked() {
    fetch("http://localhost:4000/")
      .then((res) => res.text())
      .then((data1) => setData1(data1)); // 노드에서 받은 정보 
  };
  
  const send =()=>{
    const client = axios.create();   // axios 기능생성   
  client.post('http://localhost:4000/api' , {data} )
  .then((res)=> console.log(res.data))
  .then((data2) => setData2(data2));   //axios 기능을 통한 post 사용및 name 값 전달.
  console.log(data2)
  //.then((res) =>res.text())
  //.then((data2) => setData(data2)); // 내가 노드로 준 정보를 잘 받았다는 의미
}

  return (
    <>
      <h1>{data}</h1>
      <h2>{data1}</h2>
      <button onClick={clicked}>노드에서 리액트 정보 체크</button>
      <button onClick={()=>{send();}}>리액트에서 노드 정보 체크</button>
      <h2>{data2}</h2>
     </>
  );
}
