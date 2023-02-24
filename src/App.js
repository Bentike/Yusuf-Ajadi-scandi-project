import React, { Component } from "react";
import AllCategories from "./Components/AllCategories";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription";
import CartPage from "./Components/CartPage";
import Clothes from "./Components/Clothes";
import Tech from "./Components/Tech";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      allProducts: [],
      techProducts: [],
      clotheProducts: [],
      productDescription: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          query {
            currencies{
                label
                symbol
            }
          }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          currencies: res.data.currencies,
        });
      })
      .catch((err) => console.log(err));

    fetch("http://localhost:4000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
            query {
              categories{
                name
                products{
                  id
                  name
                  inStock
                  gallery
                  description
                  category
                  attributes{
                    id
                    name
                    type
                    items{
                      displayValue
                      value
                      id
                    }
                  }
                  prices{
                     currency{
                        label
                        symbol
                    }
                     amount
                  }
                  brand
                }
              }
            }`,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          allProducts: res.data.categories[0].products,
          techProducts: res.data.categories[2].products,
          clotheProducts: res.data.categories[1].products,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const handleProductClick = (item) => {
      // This function will get the data of the clicked product and pass it to this.state.productDescription
      // this function will be passed as a prop to Product.jXs
      console.log("Product Just Got Clicked");
      this.state.allProducts.find((prod) => {
        return prod === item;
      });
    };

    return (
      <Routes>
        <Route
          path="/"
          element={
            <AllCategories
              currencies={this.state.currencies}
              allProducts={this.state.allProducts}
              productClick={handleProductClick}
            />
          }
        />
        <Route
          path="tech"
          element={
            <Tech
              currencies={this.state.currencies}
              techProducts={this.state.techProducts}
            />
          }
        />
        <Route
          path="clothes"
          element={
            <Clothes
              currencies={this.state.currencies}
              clotheProducts={this.state.clotheProducts}
            />
          }
        />
        <Route
          path="product"
          element={<ProductDescription currencies={this.state.currencies} />}
        />
        <Route
          path="cart"
          element={<CartPage currencies={this.state.currencies} />}
        />
      </Routes>
    );
  }
}

export default App;
