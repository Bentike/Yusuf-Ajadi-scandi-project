import React, { Component } from "react";
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
            <button className="overlayCartBtn" onClick={() => this.props.increaseItem(this.props.size, this.props.color, this.props.name)}>+</button>
            <p className="cartQuantity">{this.props.quantity}</p>
            <button className="overlayCartBtn" onClick={() => this.props.decreaseItem(this.props.size, this.props.color, this.props.name)}>-</button>
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