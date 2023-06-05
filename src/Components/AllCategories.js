import React, { Component } from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import "../Styles/Category.css";

class AllCategories extends Component {
  render() {
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
          currency={this.props.currency}
          total={this.props.total}
        />
        <h2 className="header">All Categories</h2>
        <div className="product-container">
          {this.props.allProducts.map((product) => {
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
                handleProductClick={this.props.productClick}
                symbol={symbol}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllCategories;
