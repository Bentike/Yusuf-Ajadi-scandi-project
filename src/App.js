import Category from './Components/Category';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import ProductDescription from './Components/ProductDescription';
import CartPage from './Components/CartPage';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Category />}/>
        <Route path='product' element={<ProductDescription />}/>
        <Route path='cart' element={<CartPage />}/>
    </Routes>
  );
}

export default App;
