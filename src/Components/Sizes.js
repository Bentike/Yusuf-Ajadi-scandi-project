import React, { Component } from "react";

class Sizes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="sizes">
          <p className="my-size" onClick={this.props.getSize} ref={this.props.sizeRef}>
            {this.props.size}
          </p>
        </div>
      </div>
    );
  }
}

export default Sizes;
