import React, { Component } from "react";

class App extends React.Component {
  cf = null
  state = {answer:''}

 handleDiv(div){
   this.updateDiv = text => {
     div.appendChild(document.createTextNode(text));
     div.appendChild(document.createElement("br"));
  };
 }
 
componentDidUpdate(props) {
  if (!this.updateDiv)
    return;
  this.updateDiv(Date());
  }
  
  onChange = e => {
    this.setState({ answer: 'X' });
  }
  
  render() {
console.log('a change', this.state.answer)
// Only fires once
    return (
      <div>
      <button onClick={this.onChange} className='but'> onChng </button>
        <div ref={div => this.handleDiv(div)}/>
      </div>

    );
  }
}

export default App;
