import React, {Component} from "react";
import "../Styles/MiniCheckout.css";

class MiniCheckout extends Component{
    render(){
        return(
            <div>
               <div className="totalWrap">
                 <p>Total</p>
                 <p>$200.00</p>
               </div>
               <div className="miniBtnWrap">
                 <button className="viewBag">VIEW BAG</button>
                 <button className="miniCheckoutBtn">CHECKOUT</button>
               </div>
            </div>
        )
    }
}

export default MiniCheckout