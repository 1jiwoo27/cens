
import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';   //axios 추가
//import { response } from "express";

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
  const [data2, setData2] = useState(null);

  function convertWebToString(data) {
    //가져온 데이터가 Object 형태인데, 왜인지 모르겠지만 eval로 다시 초기화 하지 않으면 버퍼로 데이터를 가지고 있음
    let myJsonString = (data.toString());
    myJsonString = eval(myJsonString);
    // console.log(myJsonString)
    return data
    // //eval로 초기화 시 array형태의 데이터 얻을 수 있음.
    // console.log(myJsonString)
    // 
}
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
	  console.log(response.data);
    // data2 => setData2(response.data); 
    alert(JSON.stringify(response.data) );
    // console.log(convertWebToString(response.data));
  })
  .then((res) => res.JSON())
  .then((data1) => setData1(data1)); // 노드에서 받은 정보  
  
      
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
