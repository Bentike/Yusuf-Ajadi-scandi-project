import React, {Component} from "react";
import '../Styles/Product.css';

class Product extends Component{
    render(){
        const {photo, productName, productPrice} = this.props;

        return(
            <div className="product-wrap">
                 <img className="product-img" src={photo} alt='product image'/>
                 <p>{productName}</p>
                 <p>{productPrice}</p>
            </div>
        );
    }
}

export default Product;