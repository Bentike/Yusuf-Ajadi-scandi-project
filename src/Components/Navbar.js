import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import logo from '../Images/a-logo.png';
import cart from '../Images/cart-logo.png';
import '../Styles/Navbar.css';

class Navbar extends Component{
    render(){
        return(
           <nav>
             <div className="nav-div">
                <ul  className="nav-items">
                    <NavLink className="list" to='/women'>Women</NavLink>
                    <NavLink className="list" to='/men'>Men</NavLink>
                    <NavLink className="list" to='/kids'>Kids</NavLink>
                </ul>
             </div>

             <div className="converter">
                <img src={logo} alt='convereter'/>
             </div>

             <div className="cart-div">
                <div>
                  <select name="currency">
                     <option value="USD">$ USD</option>
                     <option value="NGN"># NGN</option>
                     <option value="NGN">$ EUR</option>
                  </select>  
                </div>
                <div>
                  <img src={cart} alt="cart-logo"/>
                </div>
             </div> 
           </nav>
        );
    }
}

export default Navbar;