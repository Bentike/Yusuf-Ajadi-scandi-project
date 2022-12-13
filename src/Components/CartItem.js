import React, {Component} from "react";
import SizeAndColor from "./SizeAndColor";
import wool from '../Images/wool.png';
import '../Styles/CartItem.css';

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
                <div>
                    <div>
                        <button>+</button>
                        <p>1</p>
                        <button>-</button>
                        <div>
                            <img src={wool} alt="wool"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;