import React, { Component } from "react";

class Colors extends Component {
  render() {
    return (
      <div>
        <p>Color:</p>
        <div className="colors">
          <div style={{backgroundColor: this.props.color}}></div>
        </div>
      </div>
    );
  }
}

export default Colors;