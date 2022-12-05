import React, {Component} from "react";
import Navbar from "./Navbar";
import wool from '../Images/wool.png';
import '../Styles/ProductDescription.css';

class ProductDescription extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="product">
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
                    <div className="details">
                        <div className="title">
                            <h2>Apollo</h2>
                            <h3>Running Short</h3>
                        </div>
                        <p>Size:</p>
                        <div className="sizes">
                           <p>XS</p>
                           <p>S</p>
                           <p>M</p>
                           <p>L</p>
                        </div>
                        <p>Color:</p>
                        <div className="colors">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <h3>Price:</h3>
                        <p>$50.00</p>
                        <button>ADD TO CART</button>
                        <div className="description">
                            <p className="description-text">
                                Find stunning women's cocktail dresses and party dresses. 
                                Stand out in lace and metallic cocktail dresses and party
                                dresses from all your favorite brands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDescription;