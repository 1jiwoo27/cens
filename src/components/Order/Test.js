import React, {useState} from "react";

export default function App() {
  const [data, setData] = useState("Hi!");

  function clicked() {
    fetch("http://localhost:4000/")
      .then((res) => res.text())
      .then((data) => setData(data));
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={clicked}>What's your name?</button>
    </>
  );
}
