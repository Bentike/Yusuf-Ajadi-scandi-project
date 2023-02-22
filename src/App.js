import React, {Component} from 'react';
import Category from './Components/Category';
import {Routes, Route} from 'react-router-dom';
import ProductDescription from './Components/ProductDescription';
import CartPage from './Components/CartPage';
import Clothes from './Components/Clothes';
import Tech from './Components/Tech';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currencies: [],
      products: []
    }
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
              category{
                name
                products{
                  id
                  name
                  inStock
                  gallery
                  description
                  category
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
        .then((res) => { console.log(res.data.category.products)})
        .catch((err) => console.log(err));   
  }

  render() {
    return (
      <Routes>
          <Route path='/' element={<Category currencies={this.state.currencies} />}/>
          <Route path='tech' element={<Tech currencies={this.state.currencies} />}/>
          <Route path='clothes' element={<Clothes currencies={this.state.currencies} />}/>
          <Route path='product' element={<ProductDescription currencies={this.state.currencies} />}/>
          <Route path='cart' element={<CartPage currencies={this.state.currencies} />}/>
      </Routes>
    );
  } 
}

export default App;
