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
    this.optionRef = React.createRef();
    this.state = {
      overlay: false,
    };
  }

  render() {
    const handleMouseEnter = () => {
      this.amountRef.current.style.display = "block";
    };

    const handleMouseLeave = () => {
      this.amountRef.current.style.display = "none";
    };

    const handleOptions = (event) => {
      console.log(event.target.value);
    };

    const showOverlay = () => {
      this.setState((prevState) => ({
        overlay: !prevState.overlay,
      }));
    };

    return (
      <div>
        <nav>
          <div className="nav-div">
            <ul className="nav-items">
              <NavLink className="list" to="/">
                ALL
              </NavLink>
              <NavLink className="list" to="/tech">
                TECH
              </NavLink>
              <NavLink className="list" to="/clothes">
                CLOTHES
              </NavLink>
            </ul>
          </div>

          <div className="convert">
            <img className="converter" src={logo} alt="convereter" />
          </div>

          <div className="cart-div">
            <div>
              <select id="currency" onChange={this.props.handleCurrencyChange}>
                {this.props.currencies.map((currency) => {
                  return (
                    <option
                      key={currency.label}
                      value={currency.symbol}
                      ref={this.optionRef}
                      selected={this.props.selectedCurrency === currency.symbol ? true : false}
                    >
                      {currency.symbol}
                    </option>
                  );
                })}
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
        <div
          className="overlay"
          style={{ display: this.state.overlay ? "block" : "none" }}
        >
          <div className="overlay-card">
            <OverlayCart />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
