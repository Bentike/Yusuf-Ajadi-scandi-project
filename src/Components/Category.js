import React, {Component} from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import '../Styles/Category.css';
import wool from '../Images/wool.png';

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

class Category extends Component{
    render(){
        return(
            <div className="category">
                <Navbar/>
                <h2 className="header">Women Category</h2>
                <div className="product-container">
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                </div>
            </div>
        );
    }
}

export default Category;