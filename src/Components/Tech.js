import React, { Component } from "react";
import Navbar from "./Navbar";
import Product from "./Product";

class Tech extends Component {
  render() {
    return (
      <div className="category">
        <Navbar currencies={this.props.currencies} handleCurrencyChange={this.props.handleCurrencyChange}/>
        <h2 className="header">Tech Category</h2>
        <div className="product-container">
          {this.props.techProducts.map((product) => {
            const { id, name, brand, description, gallery, inStock, prices } = product;
            let image = gallery[0];
            let price = prices[0].amount;
            return (
              <Product
                key={id}
                photo={image}
                productName={name}
                productPrice={price}
                handleProductClick={this.props.productClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tech;
