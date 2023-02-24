import React, { Component } from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import "../Styles/Category.css";

class AllCategories extends Component {
  render() {
    return (
      <div className="category">
        <Navbar currencies={this.props.currencies} />
        <h2 className="header">All Categories</h2>
        <div className="product-container">
          {this.props.allProducts.map((product) => {
            const { id, name, brand, description, gallery, inStock, prices } = product;
            let image = gallery[0];
            let price = prices[0].amount;
            return (
              <Product
                key={id}
                photo={image}
                productName={brand}
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

export default AllCategories;
