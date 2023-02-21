import React, { Component } from "react";
import { useQuery, gql } from "@apollo/client";
import Product from "./Product";
import Navbar from "./Navbar";
import "../Styles/Category.css";
import wool from "../Images/wool.png";

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="category">
        <Navbar currencies={this.props.currencies} />
        <h2 className="header">Women Category</h2>
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

export default Category;
