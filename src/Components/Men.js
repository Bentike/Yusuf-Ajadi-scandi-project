import React, {Component} from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import wool from '../Images/wool.png';

class Men extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h2 className="header">Men Category</h2>
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

export default Men;