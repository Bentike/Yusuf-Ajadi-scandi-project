import React, {Component} from "react";
import Navbar from './Navbar';
import '../Styles/Cart.css';

class CartPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h2 className="cart-header">CART</h2>
                <hr/>
                  
                <hr/>
            </div>
        );
    }
}

export default CartPage;