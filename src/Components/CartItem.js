import React, { Component } from "react";
import uniqid from "uniqid";
import "../Styles/CartItem.css";
import Colors from "./Colors";
import Sizes from "./Sizes";

class CartItem extends Component {
  render() {
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
            {this.props.sizes
              ? this.props.sizes.map((item) => {
                  return (
                    <Sizes
                      key={uniqid()}
                      size={item.value}
                    />
                  );
                })
              : this.props.colors
              ? this.props.colors.map((color) => {
                  return (
                    <Colors
                      key={uniqid()}
                      color={color.value}
                    />
                  );
                })
              : ""}
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
