import React, { Component } from "react";

class Colors extends Component {
  constructor(props) {
    super(props);
    this.colorRef = React.createRef();
  }
  render() {
    const addClass = () => {
      this.colorRef.current.classList.toggle("selected-color");
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
