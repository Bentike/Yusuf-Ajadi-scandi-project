import React, {Component} from "react";
import Navbar from './Navbar';
import CartItem from "./CartItem";
import '../Styles/Cart.css';

class CartPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h2 className="cart-header">CART</h2>
                <hr/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
            </div>
        );
    }
}

export default CartPage;