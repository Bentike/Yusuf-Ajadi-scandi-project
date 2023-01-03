import React, {Component} from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import '../Styles/Category.css';
import wool from '../Images/wool.png';

class Category extends Component{
 
    render(){
        const cartLogo = document.getElementById("cart");
    
        const handleMouseEnter = () => {
           cartLogo.style.display = "none";
        }

        return(
            <div className="category">
                <Navbar/>
                <h2 className="header">Category name</h2>
                <div className="product-container">
                    <Product handleMouseEnter={handleMouseEnter} photo={wool} productName='wool hood' productPrice='$50.00'/>
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