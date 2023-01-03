import React, {Component} from "react";
import cart from '../Images/cart.png';
import '../Styles/Product.css';

class Product extends Component{
    render(){
        const {photo, productName, productPrice} = this.props;

        return(
            <div className="product-wrap">
                 <img className="product-img" src={photo} alt="product"/>
                 <p>{productName}</p>
                 <p>{productPrice}</p>
                 <img className="cart" src={cart} alt="add to cart"/>
            </div>
        );
    }
}

export default Product;