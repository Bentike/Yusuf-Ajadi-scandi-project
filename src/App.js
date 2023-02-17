import Category from './Components/Category';
import {Routes, Route} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import ProductDescription from './Components/ProductDescription';
import CartPage from './Components/CartPage';
import Kids from './Components/Kids';
import Men from './Components/Men';
import './App.css';

const GET_PRODUCTS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

function App() {
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

export default App;
