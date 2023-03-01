import React, { Component } from "react";

class Colors extends Component {
  render() {
    const addClass = () => {
        let myDiv = document.getElementsByClassName('colors');
        let myColors = document.getElementsByClassName('my-color');
        myColors[0].classList.add("selected-color");
        console.log(myColors[0].classList)
    }

    return (
      <div>
        <div className="colors">
          <div style={{backgroundColor: this.props.color}} onClick={addClass} className='my-color'></div>
        </div>
      </div>
    );
  }
}

export default Colors;