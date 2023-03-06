import React, { Component } from "react";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import "../Styles/Cart.css";

class CartPage extends Component {
  render() {
    return (
      <div className="category">
        <Navbar
          currencies={this.props.currencies}
          handleCurrencyChange={this.props.handleCurrencyChange}
        />
        <h2 className="cart-header">CART</h2>
        <hr />
        <CartItem />
       
      </div>
    );
  }
}

export default CartPage;
