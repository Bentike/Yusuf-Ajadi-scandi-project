import React, {Component} from "react";
import wool from '../Images/wool.png';
import '../Styles/CartItem.css';

class CartItem extends Component {
    render(){
        console.log(this.props.cart);
        return(
            <div className="cart">
                <div className="cart-item">
                    <div>
                        <h3>Apollo</h3>
                        <h4>Running Shot</h4>
                        <p>$50.00</p>
                    </div>
                    <div className="item-image-wrap">
                        <div className="item-image">
                            <button className="cart-btn"><span className="text">+</span></button>
                            <button className="quantity"><span className="text">1</span></button>
                            <button className="cart-btn"><span className="text">-</span></button>
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