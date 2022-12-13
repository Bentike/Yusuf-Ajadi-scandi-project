import React, {Component} from "react";
import SizeAndColor from "./SizeAndColor";

class CartItem extends Component {
    render(){
        return(
            <div className="cart-item">
                <div>
                    <h3>Apollo</h3>
                    <h4>Running Short</h4>
                    <p>$50.00</p>
                    <SizeAndColor/>
                </div>
                <div></div>
            </div>
        )
    }
}