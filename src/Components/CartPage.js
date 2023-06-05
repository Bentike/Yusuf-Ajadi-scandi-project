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
          cartLength={this.props.length}
          cart={this.props.cart}
          increment={this.props.increment}
          decrement={this.props.decrement}
          total={this.props.total}
        />
        <h2 className="cart-header">CART</h2>
        <hr />
        {this.props.cart.map((item) => {
          const { category, name, brand, quantity, gallery, prices, attributes, size, color } = item;
          let sizes = [];
          let colors = [];
          if(item.category === "clothes"){ 
            colors = null;
           sizes = item.attributes[0].items;
          }else if(item.category === "tech"){
            sizes = null;
           if (attributes.length) {
             for (let attr of attributes){
               if (attr.id === "Color") colors = attr.items;
               continue;
             }
           }
          }
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
              key={category === "clothes" ? name + size : name + color}
              name={name}
              brand={brand}
              quantity={quantity}
              image={image}
              symbol={symbol}
              price={amount}
              sizes={sizes}
              size={size}
              colors={colors}
              color={color}
              setSize={this.props.setSize}
              setColor={this.props.setColor}
              increaseItem={this.props.incrementItem}
              decreaseItem={this.props.decrementItem}
            /> 
          );
        })}
        <Checkout />
      </div>
    );
  }
}

export default CartPage;
