import React, {Component} from "react";
import logo from '../Images/a-logo.png';
import cart from '../Images/cart-logo.png';

import '../Styles/Navbar.css';

class Navbar extends Component{
    render(){
        return(
           <nav>
             <div className="nav-div">
                <ul  className="nav-items">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
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
        )
    }
}

export default Navbar;