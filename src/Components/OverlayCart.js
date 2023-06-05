import React, { Component } from "react";
import "../Styles/OverlayCart.css";
import MiniCheckout from "./MiniCheckout";
import OverlayCartItems from "./OverlayCartItems";

class OverlayCart extends Component {
  render() {
    return (
      <div className="miniCartWrap">
        <h5 className="myBag">
          My Bag,
          <span className="overlayCartItem">
            {" "}
            {this.props.cart.length}{" "}
            {this.props.cart.length < 2 ? "item" : "items"}
          </span>
        </h5>
        {this.props.cart.map((item, idx) => {
           const { category, name, quantity, gallery, prices, attributes, size, color } = item;
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
            <OverlayCartItems
              key={idx}
              name={name}
              symbol={symbol}
              price={amount}
              quantity={quantity}
              photo={image}
              size={size}
              sizes={sizes}
              colors={colors}
              color={color}
              increaseItem={this.props.incrementItem}
              decreaseItem={this.props.decrementItem}
            />
          );
        })}
        <MiniCheckout total={this.props.total}/>
      </div>
    );
  }
}

export default OverlayCart;
