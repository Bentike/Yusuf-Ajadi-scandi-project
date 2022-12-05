import React, {Component} from "react";
import Navbar from "./Navbar";
import wool from '../Images/wool.png';
import '../Styles/ProductDescription.css';

class ProductDescription extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="product-wrap">
                     <div className="product-bar">
                         <img className="product-bar-img" src={wool} alt='product'/>
                         <img className="product-bar-img" src={wool} alt='product'/>
                         <img className="product-bar-img" src={wool} alt='product'/>
                     </div>
                     <div className="main-product">
                         <img src={wool} alt='product'/>
                     </div>
                </div>
                <div>
                    Details
                </div>
            </div>
        );
    }
}

export default ProductDescription;