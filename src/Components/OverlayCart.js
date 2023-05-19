import React, { Component } from "react";
import "../Styles/OverlayCart.css";
import MiniCheckout from "./MiniCheckout";
import OverlayCartItems from "./OverlayCartItems";

class OverlayCart extends Component {
  render() {
    return (
      <div className="miniCartWrap">
        <h5 className="myBag">
          My Bag,<span className="overlayCartItem"> 3 items</span>
        </h5>
        <OverlayCartItems/>
        <MiniCheckout/>
      </div>
    );
  }
}

export default OverlayCart;
