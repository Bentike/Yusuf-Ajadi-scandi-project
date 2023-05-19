import React, { Component } from "react";
import photo from "../Images/wool.png"
import CartOverlaySize from "./CartOverlaySize";


class OverlayCartItems extends Component {
  render() {
    return (
      <div className="overlayCartWrap">
        <div>
          <p className="cartOverlayItemName">Apollo Running Short</p>
          <p className="cartOverlayPrice">$50.00</p>
          <p className="size">size</p>
          <CartOverlaySize/>
          <p className="cartColor">color</p>
          <div className="cartColors">
            <div className="overlayColors"></div>
            <div className="overlayColors"></div>
            <div className="overlayColors"></div>
          </div>
        </div>
        <div className="controlWrap">
          <div className="cartBtnDiv">
            <button className="overlayCartBtn">+</button>
            <p className="cartQuantity">1</p>
            <button className="overlayCartBtn">-</button>
          </div>
          <div>
            <img src={photo} alt="item" className="overlayCartImg" />
          </div>
        </div>
      </div>
    );
  }
}

export default OverlayCartItems;