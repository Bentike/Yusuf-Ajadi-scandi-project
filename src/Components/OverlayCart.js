import React, { Component } from "react";
import "../Styles/OverlayCart.css";
import MiniCheckout from "./MiniCheckout";
import OverlayCartItems from "./OverlayCartItems";

class OverlayCart extends Component {
  render() {
    return (
      <div className="miniCartWrap">
        <h5 className="myBag">
          My Bag,<span className="overlayCartItem"> {this.props.cart.length} {this.props.cart.length < 2 ? "item" : "items"}</span>
        </h5>
        {this.props.cart.map((item, idx) => {
          console.log(item);
           return <OverlayCartItems key={idx} name={item.name} price={item.prices[0].amount} photo={item.gallery[0]} />
        })}
        <MiniCheckout/>
      </div>
    );
  }
}

export default OverlayCart;
