import React, { Component } from "react";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.colorRef = React.createRef();
  }
  render() {
    const addClass = () => {
      const myColors = document.getElementsByClassName('my-color');
      for(let color of myColors){
         color.classList.remove("selected-color");
      }
      this.colorRef.current.classList.toggle("selected-color");
      this.props.setColor(this.colorRef.current.style.backgroundColor);
    };

    return (
      <div>
        <div className="colors">
          <div
            style={{ backgroundColor: this.props.color }}
            onClick={addClass}
            className="my-color"
            ref={this.colorRef}
          ></div>
        </div>
      </div>
    );
  }
}

export default Colors;
