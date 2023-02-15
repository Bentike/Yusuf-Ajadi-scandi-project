import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/a-logo.png";
import cart from "../Images/cart-logo.png";
import "../Styles/Navbar.css";
import OverlayCart from "./OverlayCart";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.amountRef = React.createRef();
    this.overlayRef = React.createRef();
    this.state = {
       overlay: ""
    }
  }

  render() {
    const handleMouseEnter = () => {
      this.amountRef.current.style.display = "block";
    };

    const handleMouseLeave = () => {
      this.amountRef.current.style.display = "none";
    };

    const showOverlay = () => {
       console.log(this.state.overlay)
    };

    return (
      <div>
        <nav>
          <div className="nav-div">
            <ul className="nav-items">
              <NavLink className="list" to="/women">
                Women
              </NavLink>
              <NavLink className="list" to="/men">
                Men
              </NavLink>
              <NavLink className="list" to="/kids">
                Kids
              </NavLink>
            </ul>
          </div>

          <div className="convert">
            <img className="converter" src={logo} alt="convereter" />
          </div>

          <div className="cart-div">
            <div>
              <select name="currency">
                <option value="USD">$ USD</option>
                <option value="NGN"># NGN</option>
                <option value="EUR">$ EUR</option>
              </select>
            </div>
            <div
              className="cart-amount"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink onClick={showOverlay}>
                <img src={cart} alt="cart-logo" />
                <p className="amount" ref={this.amountRef}>
                  3
                </p>
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="overlay" style={{display: this.state.overlay}}>
          <div className="overlay-card">
            <OverlayCart />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
