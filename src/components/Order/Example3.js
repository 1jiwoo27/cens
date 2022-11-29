import React from "react";

export default class Example3 extends React.Component {
  state = {
    text: "",
  };

  handlChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    return (
      <div>
        <input name="text" onChange={this.handlChange}></input>
        <button>전송</button>
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}