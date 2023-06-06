import React, {Component} from "react";
import '../Styles/Checkout.css';

class Checkout extends Component{
    render(){
        return(
            <div className="checkout">
                <p>Tax 21% : <span className="val">$40</span></p>
                <p>Quantity : <span className="val qty">3</span></p>
                <p>Total : <span className="val total">{this.props.total}</span></p>
                <button className="checkout-btn">ORDER</button>
            </div>
        );
    }
}

export default Checkout;