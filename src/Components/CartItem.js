import React, { Component } from "react";
import uniqid from "uniqid";
import "../Styles/CartItem.css";
import Colors from "./Colors";
import Sizes from "./Sizes";

const style = { width: "35px", height: "28px", margin: "0 2px" };

class CartItem extends Component {
  render() {

    const hexToRgb = (hex) => {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      let newResult = {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
       }
      let finalResult = "rgb(" + newResult.r + ", " + newResult.g + ", " + newResult.b + ")";
      return finalResult;
    }
    

    return (
      <div className="cart">
        <div className="cart-item">
          <div>
            <h3>{this.props.name}</h3>
            <h4>{this.props.brand}</h4>
            <p>
              {this.props.symbol}
              {this.props.price}
            </p>
            <div style={{ display: "flex" }}>
              {this.props.sizes
                ? this.props.sizes.map((item) => {
                    return (
                      <div
                        className={
                          item.value === this.props.size ? "selected-size" : ""
                        }
                        style={style}
                      >
                        <Sizes
                          key={uniqid()}
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
                        className={
                          hexToRgb(color.value) === this.props.color ? "selected-color" : ""
                        }
                      >
                        <Colors
                          key={uniqid()}
                          color={color.value}
                          setColor={this.props.setColor}
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
          <div className="item-image-wrap">
            <div className="item-image">
              <button className="cart-btn">
                <span className="text">+</span>
              </button>
              <button className="quantity">
                <span className="text">{this.props.quantity}</span>
              </button>
              <button className="cart-btn">
                <span className="text">-</span>
              </button>
            </div>
            <div>
              <img
                className="product-display"
                src={this.props.image}
                alt="wool"
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default CartItem;
