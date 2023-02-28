import React, { Component } from "react";

class Colors extends Component {
  render() {
    const addClass = () => {
        console.log(this);
    }

    return (
      <div>
        <div className="colors">
          <div style={{backgroundColor: this.props.color}} onClick={addClass}></div>
        </div>
      </div>
    );
  }
}

export default Colors;