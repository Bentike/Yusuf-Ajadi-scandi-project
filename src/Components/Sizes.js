import React, { Component } from "react";

class Sizes extends Component {
  constructor(props) {
    super(props);
    this.sizeRef = React.createRef();
  }

  render() {
    // This method gets The size attribute of a selected product;
    // It also runs the props.setSize method to set the selected size attribute;
    const getSize = () => {
      const mySize = document.getElementsByClassName("my-size");
      for (let size of mySize) {
        size.classList.remove("selected-size");
      }
      this.sizeRef.current.classList.toggle("selected-size");
      this.props.setSize(this.sizeRef.current.textContent);
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