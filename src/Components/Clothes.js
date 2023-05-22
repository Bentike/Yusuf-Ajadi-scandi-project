import React, { Component } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

class Clothes extends Component {
  render() {
    return (
      <div className="category">
        <Navbar
          currencies={this.props.currencies}
          handleCurrencyChange={this.props.handleCurrencyChange}
          selectedCurrency={this.props.selectedCurrency}
          cartLength={this.props.length}
          cart={this.props.cart}
        />
        <h2 className="header">Clothes Category</h2>
        <div className="product-container">
          {this.props.clotheProducts.map((product) => {
            const { id, name, brand, description, gallery, inStock, prices } =
              product;
            let image = gallery[0];
            let amount;
            let symbol;
            for (let i = 0; i < prices.length; i++) {
              if (prices[i].currency.symbol === this.props.currency) {
                amount = prices[i].amount;
                symbol = prices[i].currency.symbol;
              }
            }
            return (
              <Product
                key={id}
                photo={image}
                productName={name}
                productPrice={amount}
                symbol={symbol}
                handleProductClick={this.props.productClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Clothes;
