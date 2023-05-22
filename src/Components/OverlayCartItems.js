import React, { Component } from "react";
import photo from "../Images/wool.png"
import CartOverlaySize from "./CartOverlaySize";
import CartOverlayColor from "./CartOverlayColor";


class OverlayCartItems extends Component {
  render() {
    return (
      <div className="overlayCartWrap">
        <div>
          <p className="cartOverlayItemName">{this.props.name}</p>
          <p className="cartOverlayPrice">${this.props.price}</p>
          <p className="size">size</p>
          <CartOverlaySize/>
          <p className="cartColor">color</p>
          <CartOverlayColor/>
        </div>
        <div className="controlWrap">
          <div className="cartBtnDiv">
            <button className="overlayCartBtn">+</button>
            <p className="cartQuantity">1</p>
            <button className="overlayCartBtn">-</button>
          </div>
          <div>
            <img src={this.props.photo} alt="item" className="overlayCartImg" />
          </div>
        </div>
      </div>
    );
  }
}

export default OverlayCartItems;