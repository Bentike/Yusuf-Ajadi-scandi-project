import React, { Component } from "react";
import Navbar from "./Navbar";
import "../Styles/ProductDescription.css";
import Sizes from "./Sizes";
import Colors from "./Colors";

class ProductDescription extends Component {
  render() {
    console.log(this.props.product);
    const { name, brand, gallery, description, prices, attributes } =
      this.props.product;
    let image = gallery[0];
    let price = prices[0].amount;
    console.log(attributes);
    return (
      <div className="category">
        <Navbar currencies={this.props.currencies} />
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
            <Sizes />
            <div>
              <p>Colors:</p>
              <div className="colors">
                {/* {attribute.map((attr) => {
                  return <Colors key={attr.id} color={attr.value} />;
                })} */}
              </div>
            </div>
            <h3>Price:</h3>
            <p>{price}</p>
            <button>ADD TO CART</button>
            <div className="description">
              <p className="description-text">
                Find stunning women's cocktail dresses and party dresses. Stand
                out in lace and metallic cocktail dresses and party dresses from
                all your favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDescription;
