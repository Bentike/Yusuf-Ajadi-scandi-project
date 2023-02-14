import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/a-logo.png';
import cart from '../Images/cart-logo.png';
import '../Styles/Navbar.css';
import CartItem from "./CartItem";

class Navbar extends Component{
   constructor(props){
      super(props);
      this.amountRef = React.createRef();
      this.overlayRef = React.createRef();
   }

    render(){
   
      const handleMouseEnter = () => {
         this.amountRef.current.style.display = "block";
      }

      const handleMouseLeave = () => {
         this.amountRef.current.style.display = "none";
      }

      const showOverlay = () => {
         this.overlayRef.current.style.display = "block";
      }

      const hideOverlay = () => {
         this.overlayRef.current.style.display = "none";
      }

        return(
          <div>
           <nav>
             <div className="nav-div">
                <ul  className="nav-items">
                    <NavLink className="list" to='/women'>Women</NavLink>
                    <NavLink className="list" to='/men'>Men</NavLink>
                    <NavLink className="list" to='/kids'>Kids</NavLink>
                </ul>
             </div>

             <div className="convert">
                <img className="converter" src={logo} alt='convereter'/>
             </div>

             <div className="cart-div">
                <div>
                  <select name="currency">
                     <option value="USD">$ USD</option>
                     <option value="NGN"># NGN</option>
                     <option value="EUR">$ EUR</option>
                  </select>  
                </div>
                <div className="cart-amount" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <NavLink to="/cart" onMouseEnter={showOverlay} onMouseLeave={hideOverlay}>
                     <img src={cart} alt="cart-logo"/>
                     <p className="amount" ref={this.amountRef}>3</p>
                  </NavLink>   
                </div>
             </div> 
           </nav>
           <div className="overlay" ref={this.overlayRef}></div>
           <div className="overlay-card">
            
           </div>
         </div>  
        );
    }
}

export default Navbar;