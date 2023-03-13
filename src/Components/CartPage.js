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
          selectedCurrency={this.props.selectedCurrency}
        />
        <h2 className="cart-header">CART</h2>
        <hr />
        {this.props.cart.map((item) => {
          const { name, brand, quantity, gallery, prices } = item;
          let image = gallery[0];
          let amount;
          let symbol;
          for (let i = 0; i < prices.length; i++) {
            if (prices[i].currency.symbol === this.props.currency) {
              amount = prices[i].amount;
              symbol = prices[i].currency.symbol;
            }
          }
          return (
            <CartItem
              key={name}
              name={name}
              brand={brand}
              quantity={quantity}
              image={image}
              symbol={symbol}
              price={amount}
            />
          );
        })}
        <Checkout />
      </div>
    );
  }
}

export default CartPage;
