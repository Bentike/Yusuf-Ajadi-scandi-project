import React, {Component} from "react";
import cart from '../Images/cart.png';
import '../Styles/Product.css';

class Product extends Component{
    constructor(props){
       super(props);
       this.cartRef = React.createRef();
    }

    render(){
        const handleMouseEnter = () => {
            let myCart = this.cartRef.current;
            myCart.style.display = "block";
        }

        const {photo, productName, productPrice} = this.props;

        return(
            <div className="product-wrap" onMouseEnter={handleMouseEnter}>
                 <img className="product-img" src={photo} alt="product"/>
                 <p>{productName}</p>
                 <p>{productPrice}</p>
                 <img id="cart" src={cart} alt="add to cart" ref={this.cartRef}/>
            </div>
        );
    }
}

export default Product;