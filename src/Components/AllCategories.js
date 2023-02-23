import React, { Component } from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import "../Styles/Category.css";
import wool from "../Images/wool.png";

class AllCategories extends Component {
 
  render() {
    return (
      <div className="category">
        <Navbar currencies={this.props.currencies} />
        <h2 className="header">All Categories</h2>
        <div className="product-container">
          <Product photo={wool} productName="wool hood" productPrice="$50.00" />
          <Product photo={wool} productName="wool hood" productPrice="$50.00" />
          <Product photo={wool} productName="wool hood" productPrice="$50.00" />
          <Product photo={wool} productName="wool hood" productPrice="$50.00" />
          <Product photo={wool} productName="wool hood" productPrice="$50.00" />
          <Product photo={wool} productName="wool hood" productPrice="$50.00" />
        </div>
      </div>
    );
  }
}

export default AllCategories;
