import React, {Component} from "react";
import Navbar from './Navbar';

class CartPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h2>CART</h2>
            </div>
        );
    }
}

export default CartPage;