import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from '../Images/a-logo.png';
import cart from '../Images/cart-logo.png';
import '../Styles/Navbar.css';

class Navbar extends Component{
    render(){
        return(
           <nav>
             <div className="nav-div">
                <ul  className="nav-items">
                    <Link to='women'><li>Women</li></Link>
                    <Link to='men'><li>Men</li></Link>
                    <Link to='kids'><li>Kids</li></Link>
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