import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/MiniCheckout.css";

class MiniCheckout extends Component {
  render() {
    return (
      <div>
        <div className="totalWrap">
          <p>Total</p>
          <p>{this.props.total}</p>
        </div>
        <div className="miniBtnWrap">
          <button className="viewBag">
            <NavLink to="/cart">
              VIEW BAG
            </NavLink>
          </button>
          <button className="miniCheckoutBtn" onClick={this.props.checkout}>CHECKOUT</button>
        </div>
      </div>
    );
  }
}

export default MiniCheckout;
