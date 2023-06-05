import React, { Component } from "react";
import CartOverlaySize from "./CartOverlaySize";
import CartOverlayColor from "./CartOverlayColor";
import Sizes from "./Sizes";
import Colors from "./Colors";

const style = { width: "35px", height: "28px", margin: "0 5px" };
 
class OverlayCartItems extends Component {
  render() {
    const hexToRgb = (hex) => {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      let newResult = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      };
      let finalResult =
        "rgb(" + newResult.r + ", " + newResult.g + ", " + newResult.b + ")";
      return finalResult;
    };

    return (
      <div className="overlayCartWrap">
        <div>
          <p className="cartOverlayItemName">{this.props.name}</p>
          <p className="cartOverlayPrice">
            {this.props.symbol}
            {this.props.price}
          </p>
          <p className="size">size</p>
          <div style={{ display: "flex" }}>
            {this.props.sizes
              ? this.props.sizes.map((item) => {
                  return (
                    <div
                      key={item.value}
                      className={
                        item.value === this.props.size ? "selected-size" : ""
                      }
                      style={style}
                    >
                      <Sizes
                        key={item.value}
                        size={item.value}
                        setSize={this.props.setSize}
                      />
                    </div>
                  );
                })
              : this.props.colors
              ? this.props.colors.map((color) => {
                  return (
                    <div
                      key={color.value}
                      className={
                        hexToRgb(color.value) === this.props.color
                          ? "selected-color-cart"
                          : ""
                      }
                    >
                      <Colors
                        key={color.value}
                        color={color.value}
                        setColor={this.props.setColor}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
        <div className="controlWrap">
          <div className="cartBtnDiv">
            <button
              className="overlayCartBtn"
              onClick={() =>
                this.props.increaseItem(
                  this.props.size,
                  this.props.color,
                  this.props.name
                )
              }
            >
              +
            </button>
            <p className="cartQuantity">{this.props.quantity}</p>
            <button
              className="overlayCartBtn"
              onClick={() =>
                this.props.decreaseItem(
                  this.props.size,
                  this.props.color,
                  this.props.name
                )
              }
            >
              -
            </button>
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
