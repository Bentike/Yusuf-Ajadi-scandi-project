import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import cart from "../Images/cart.png";
import "../Styles/Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.cartRef = React.createRef();
  }

  render() {
    const handleMouseEnter = () => {
      this.cartRef.current.style.display = "block";
    };

    const handleMouseLeave = () => {
      this.cartRef.current.style.display = "none";
    };

    const { photo, productName, productPrice } = this.props;

    return (
      <div
        className="product-wrap"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => this.props.handleProductClick(productName)}
      >
        <NavLink className="prod" to="/product">
          <img className="product-img" src={photo} alt="product" />
          <p>{productName}</p>
          <p>{productPrice}</p>
          <img id="cart" src={cart} alt="add to cart" ref={this.cartRef} />
        </NavLink>
      </div>
    );
  }
}

export default Product;
