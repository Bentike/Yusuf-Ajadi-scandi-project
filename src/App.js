import React, {Component} from 'react';
import Category from './Components/Category';
import {Routes, Route} from 'react-router-dom';
import ProductDescription from './Components/ProductDescription';
import CartPage from './Components/CartPage';
import Kids from './Components/Kids';
import Men from './Components/Men';
import './App.css';

class App extends Component {
  render() {
    return (
      <Routes>
          <Route path='/' element={<Category />}/>
          <Route path='women' element={<Category />}/>
          <Route path='men' element={<Men />}/>
          <Route path='kids' element={<Kids />}/>
          <Route path='product' element={<ProductDescription />}/>
          <Route path='cart' element={<CartPage />}/>
      </Routes>
    );
  } 
}

export default App;
