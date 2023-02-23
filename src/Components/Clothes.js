import React, { Component } from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import wool from "../Images/wool.png";

class Clothes extends Component {
  render() {
    return (
      <div className="category">
        <Navbar currencies={this.props.currencies} />
        <h2 className="header">Clothes Category</h2>
        <div className="product-container">
          {this.props.clotheProducts.map((product) => {
            const { id, name, brand, description, gallery, inStock, prices } = product;
            let image = gallery[0];
            let price = prices[0].amount;
            return (
              <Product
                key={id}
                photo={image}
                productName={brand}
                productPrice={price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Clothes;
