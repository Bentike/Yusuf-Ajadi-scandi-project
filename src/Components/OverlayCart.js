import React, { Component } from "react";
import "../Styles/OverlayCart.css";
import MiniCheckout from "./MiniCheckout";
import photo from "../Images/wool.png"

class OverlayCart extends Component {
  render() {
    return (
      <div>
        <h5 className="myBag">
          My Bag,<span className="overlayCartItem"> 3 items</span>
        </h5>
        <div className="overlayCartWrap">
          <div>
            <p className="cartOverlayItemName">Apollo Running Short</p>
            <p className="cartOverlayPrice">$50.00</p>
            <p className="size">size</p>
            <div className="sizes">
                <div className="sizeBox">XS</div>
                <div className="sizeBox">S</div>
                <div className="sizeBox">M</div>
                <div className="sizeBox">L</div>
            </div>
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
                <img src={photo} alt="item" className="overlayCartImg"/>
              </div>
          </div>
        </div>
        <MiniCheckout/>
      </div>
    );
  }
}

export default OverlayCart;
