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
        {this.props.cart.map(item => {
          const {name, brand, quantity, gallery, prices} = item;
          let image = gallery[0];
          let price = prices[0].amount;
          return <CartItem name={name} brand={brand} quantity={quantity} image={image} price={price}/>
        })}
        <Checkout />
      </div>
    );
  }
}

export default CartPage;
