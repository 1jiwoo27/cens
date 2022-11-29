import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';   //axios 추가
const exec = require('child_process').execSync;
const iconv = require('iconv-lite');

export default function Test() {
  const location = useLocation();
  const name = location.state.name;
  const credit = location.state.credit;
  const teach = location.state.teach;
  const pro = location.state.pro;
  const test = location.state.test;
  
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
  .then(function(response){
	  let final = [];
    console.log("데이터 확인만 %j",response.data);
    //data2 = setData2(response.data);
    alert(JSON.stringify(response.data) );
    })
  .then((data2)=> setData2(data2));
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