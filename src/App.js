import React, { Component } from "react";
import AllCategories from "./Components/AllCategories";
import { Routes, Route } from "react-router-dom";
import ProductDescription from "./Components/ProductDescription";
import CartPage from "./Components/CartPage";
import Clothes from "./Components/Clothes";
import Tech from "./Components/Tech";
import Bar from "./Components/Bar";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [],
      selectedCurrency: "$",
      selectedProduct: {},
      selectedSize: "",
      selectedColor: "",
      allProducts: [],
      techProducts: [],
      clotheProducts: [],
      cart: [],
      total: 0
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
      let updatedProduct = Object.assign({}, product, { quantity: 1 });
      this.setState({
        selectedProduct: updatedProduct,
      });
    };

     // This method calculate the price of all items in Cart.
     const calculateTotal = () => {
      let currency = this.state.selectedCurrency;
      let totalPrice = 0;
      for(let i = 0; i < this.state.cart.length; i++){
         let currentCurrency = this.state.cart[i].prices.find(item => item.currency.symbol === currency);
         let price = currentCurrency.amount * Number(this.state.cart[i].quantity);
        totalPrice += price;
      }
      this.setState({
         total: `${currency}${totalPrice}`
      })
  }

    // this method sets the user selected currency
    const handleCurrencyChange = (event) => {
      this.setState({
        selectedCurrency: event.target.value,
      });
    };

    // this method add items to the cart
    // it is passed as a prop to ProductDescription.js
    const addToCart = () => {
      for (let item of this.state.cart) {
        if (
          item.category === "clothes" &&
          this.state.selectedProduct.category === "clothes"
        ) {
          if (item.size === this.state.selectedProduct.size) {
            console.log("Item already in cart");
            return;
          }
        } else if (
          item.category === "tech" &&
          this.state.selectedProduct.category === "tech"
        ) {
          if (
            item.color === this.state.selectedProduct.color &&
            item.name === this.state.selectedProduct.name
          ) {
            console.log("Item already in cart");
            return;
          }
        }
      }
      if (
        (this.state.selectedProduct.category === "clothes" &&
          !this.state.selectedSize) ||
        (this.state.selectedProduct.category === "tech" &&
          !this.state.selectedProduct.attributes &&
          !this.state.selectedColor)
      ) {
        console.log("please select a color or size");
        return;
      }

      this.setState({
        cart: this.state.cart.concat(this.state.selectedProduct),
      });
      calculateTotal();
      console.log("Total Calculated")
    };

    // this method gets the selected Size attribute of a product and sets it's value to this.state.selectedSize
    // this method will be passed to ProductDescription.js as a prop
    // this method will be passed from ProductDescrition.js to Sizes.js as a prop where it will be called.
    const setSelectedSize = (size) => {
      let selectedProductSize = this.state.selectedProduct;
      let newProductSize = Object.assign({}, selectedProductSize, {
        size: size,
      });
      this.setState({
        selectedSize: size,
        selectedProduct: newProductSize,
      });
    };

    // this method gets the selected color attribute of a product and sets it's value to this.state.selectedColor
    // this method will be passed to ProductDescription.js as a prop
    // this method will be passed from ProductDescrition.js to Colors.js as a prop where it will be called.
    const setSelectedColor = (color) => {
      let selectedProductColor = this.state.selectedProduct;
      let newProductColor = Object.assign({}, selectedProductColor, {
        color: color,
      });
      this.setState({
        selectedColor: color,
        selectedProduct: newProductColor,
      });
    };

    // This fucntion Increment items in the Cart.
    const increaseItem = (size, color, name) => {
      let product = this.state.cart.find((item) => {
        if (item.size) return item.size === size && item.name === name;
        if (item.color) return item.color === color && item.name === name;
        else return item.name === name;
      });
      product.quantity += 1;
      this.setState({
        cart: this.state.cart,
      });
      calculateTotal();
    };

    // This function decrement items in the Cart.
    const decreaseItem = (size, color, name) => {
      let product = this.state.cart.find((item) => {
        if (item.size) return item.size === size && item.name === name;
        if (item.color) return item.color === color && item.name === name;
        else return item.name === name;
      });
      if (product.quantity >= 1) {
        product.quantity -= 1;
      }
      this.setState({
        cart: this.state.cart,
      });
      calculateTotal();
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
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
              currency={this.state.selectedCurrency}
              length={this.state.cart.length}
              cart={this.state.cart}
              increment={increaseItem}
              decrement={decreaseItem}
              total={this.state.total}
            />
          }
        />
        <Route
          path="tech"
          element={
            <Tech
              currencies={this.state.currencies}
              currency={this.state.selectedCurrency}
              techProducts={this.state.techProducts}
              productClick={handleProductClick}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
              length={this.state.cart.length}
              cart={this.state.cart}
              increment={increaseItem}
              decrement={decreaseItem}
              total={this.state.total}
            />
          }
        />
        <Route
          path="clothes"
          element={
            <Clothes
              currencies={this.state.currencies}
              currency={this.state.selectedCurrency}
              clotheProducts={this.state.clotheProducts}
              productClick={handleProductClick}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
              length={this.state.cart.length}
              cart={this.state.cart}
              increment={increaseItem}
              decrement={decreaseItem}
              total={this.state.total}
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
              length={this.state.cart.length}
              cart={this.state.cart}
              increment={increaseItem}
              decrement={decreaseItem}
              total={this.state.total}
            />
          }
        />
        <Route
          path="cart"
          element={
            <CartPage
              currencies={this.state.currencies}
              currency={this.state.selectedCurrency}
              handleCurrencyChange={handleCurrencyChange}
              selectedCurrency={this.state.selectedCurrency}
              cart={this.state.cart}
              setSize={setSelectedSize}
              setColor={setSelectedColor}
              incrementItem={increaseItem}
              decrementItem={decreaseItem}
              length={this.state.cart.length}
              total={this.state.total}
            />
          }
        />
      </Routes>
    );
  }
}

export default App;
