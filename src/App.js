import React, {Component} from 'react';
import Category from './Components/Category';
import {Routes, Route} from 'react-router-dom';
import ProductDescription from './Components/ProductDescription';
import CartPage from './Components/CartPage';
import Kids from './Components/Kids';
import Men from './Components/Men';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currencies: []
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
  }

  render() {
    return (
      <Routes>
          <Route path='/' element={<Category currencies={this.state.currencies} />}/>
          <Route path='women' element={<Category currencies={this.state.currencies} />}/>
          <Route path='men' element={<Men currencies={this.state.currencies} />}/>
          <Route path='kids' element={<Kids currencies={this.state.currencies} />}/>
          <Route path='product' element={<ProductDescription currencies={this.state.currencies} />}/>
          <Route path='cart' element={<CartPage currencies={this.state.currencies} />}/>
      </Routes>
    );
  } 
}

export default App;
