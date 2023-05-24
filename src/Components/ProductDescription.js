import React, { Component } from "react";
import Navbar from "./Navbar";
import "../Styles/ProductDescription.css";
import Sizes from "./Sizes";
import Colors from "./Colors";

class ProductDescription extends Component {
  render() {
    const { name, brand, gallery, description, prices, attributes } =
      this.props.product;
    let amount;
    let symbol;
    for (let i = 0; i < prices.length; i++) {
      if (prices[i].currency.symbol === this.props.currency) {
        amount = prices[i].amount;
        symbol = prices[i].currency.symbol;
      }
    }
    let image = gallery[0];
    let colors = [];
    let sizes = [];
    let productDescription = { __html: description };
    if (this.props.product.category === "clothes") {
      sizes = this.props.product.attributes[0].items;
    } else if (this.props.product.category === "tech") {
      if (attributes.length) {
        for (let attr of attributes) {
          if (attr.id === "Color") colors = attr.items;
          continue;
        }
      }
    }
    return (
      <div className="category">
        <Navbar
          currencies={this.props.currencies}
          handleCurrencyChange={this.props.handleCurrencyChange}
          selectedCurrency={this.props.selectedCurrency}
          cartLength={this.props.length}
          cart={this.props.cart}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
        <div className="product">
          <div className="product-wrapper">
            <div className="product-bar">
              <img className="product-bar-img" src={image} alt="product" />
              <img className="product-bar-img" src={image} alt="product" />
              <img className="product-bar-img" src={image} alt="product" />
            </div>
            <div className="main-product">
              <img className="product-image" src={image} alt="product" />
            </div>
          </div>
          <div className="details">
            <div className="title">
              <h2>{name}</h2>
              <h3>{brand}</h3>
            </div>
            {this.props.product.category === "clothes" ? (
              <div>
                <p>Sizes:</p>
                <div className="sizes">
                  {sizes.map((item) => {
                    return (
                      <Sizes
                        key={item.id}
                        size={item.value}
                        setSize={this.props.setSize}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {this.props.product.category === "tech" ? (
              <div>
                <p>Colors:</p>
                <div className="colors-wrap">
                  {colors.map((attr) => {
                    return (
                      <Colors
                        key={attr.id}
                        color={attr.value}
                        setColor={this.props.setColor}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            <h3>Price:</h3>
            <p>
              {symbol}
              {amount}
            </p>
            <button onClick={this.props.addToCart}>ADD TO CART</button>
            <div className="description">
              <div
                className="description-text"
                dangerouslySetInnerHTML={productDescription}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
