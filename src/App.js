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
      selectedCurrency: "$",
      selectedProduct: [],
      selectedSize: "",
      selectedColor: "",
      allProducts: [],
      techProducts: [],
      clotheProducts: [],
      cart: [],
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
    // This method will get the data of the clicked product and pass it to this.state.selectedProduct
    // this method will be passed as a prop to Product.jXs
    const handleProductClick = (item) => {
      let product = this.state.allProducts.find((prod) => prod.name === item);
      this.setState({
        selectedProduct: product,
      });
    };

    // this method sets the user selected currency
    const handleCurrencyChange = (event) => {
      this.setState({
        selectedCurrency: event.target.value,
      });
    };

    // this method add items to the cart
    // it is passed as a prop to ProductDescription.js
    const addToCart = () => {
      this.setState({
        cart: [...this.state.cart, this.state.selectedProduct]
      });
      console.log(this.state.cart);
    }

    // this method gets the selected Size attribute of a product and sets it's value to this.state.selectedSize
    // this method will be passed to ProductDescription.js as a prop
    // this method will be passed from ProductDescrition.js to Sizes.js as a prop where it will be called.
    const setSelectedSize = (size) => {
       this.setState({
         selectedSize: size
       });
    }

    // this method gets the selected color attribute of a product and sets it's value to this.state.selectedColor
    // this method will be passed to ProductDescription.js as a prop
    // this method will be passed from ProductDescrition.js to Colors.js as a prop where it will be called.
    const setSelectedColor = (color) => {
      this.setState({
         selectedColor: color
      })
    }

    return (
      <Routes>
        <Route
          path="/"
          element={
            <AllCategories
              currencies={this.state.currencies}
              allProducts={this.state.allProducts}
              productClick={handleProductClick}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
            />
          }
        />
        <Route
          path="tech"
          element={
            <Tech
              currencies={this.state.currencies}
              techProducts={this.state.techProducts}
              productClick={handleProductClick}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
            />
          }
        />
        <Route
          path="clothes"
          element={
            <Clothes
              currencies={this.state.currencies}
              clotheProducts={this.state.clotheProducts}
              productClick={handleProductClick}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
            />
          }
        />
        <Route
          path="product"
          element={
            <ProductDescription
              currency={this.state.selectedCurrency}
              currencies={this.state.currencies}
              product={this.state.selectedProduct}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
              addToCart={addToCart}
              setSize={setSelectedSize}
              setColor={setSelectedColor}
            />
          }
        />
        <Route
          path="cart"
          element={
            <CartPage
              currencies={this.state.currencies}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
