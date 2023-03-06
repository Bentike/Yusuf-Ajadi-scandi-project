import React, { Component } from "react";

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.sizeRef = React.createRef();
  }

  render() {
    const getSize = () => {
      const mySize = document.getElementsByClassName("my-size");
      for (let size of mySize) {
        size.classList.remove("selected-size");
      }
      this.sizeRef.current.classList.toggle("selected-size");
    };
    return (
      <div>
        <div className="sizes">
          <p className="my-size" onClick={getSize} ref={this.sizeRef}>
            {this.props.size}
          </p>
        </div>
      </div>
    );
  }
}

export default Sizes;
