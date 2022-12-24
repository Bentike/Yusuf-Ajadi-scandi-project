import React, {Component} from "react";
import SizeAndColor from "./SizeAndColor";
import wool from '../Images/wool.png';
import '../Styles/CartItem.css';

class CartItem extends Component {
    render(){
        return(
            <div className="cart">
                <div className="cart-item">
                    <div>
                        <h3>Apollo</h3>
                        <h4>Running Short</h4>
                        <p>$50.00</p>
                        <SizeAndColor/>
                    </div>
                    <div className="item-image-wrap">
                        <div className="item-image">
                            <button className="cart-btn">+</button>
                            <button className="quantity">1</button>
                            <button className="cart-btn">-</button>
                        </div>
                        <div>
                            <img className="product-display" src={wool} alt="wool"/>
                        </div>
                    </div>
                </div>
                <hr/>
           </div>
        );
    }
}

export default CartItem;