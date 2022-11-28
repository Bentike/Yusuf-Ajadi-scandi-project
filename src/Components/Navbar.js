import React, {Component} from "react";
import logo from '../Images/a-logo.png';
import cart from '../Images/cart-logo.png';

class Navbar extends Component{
    render(){
        return(
           <nav>
             <div>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Kids</li>
                </ul>
             </div>

             <div>
                <img src={logo} alt='convereter'/>
             </div>

             <div>
                <p>$</p>
                <img src={cart} alt="cart-logo"/>
             </div> 
           </nav>
        )
    }
}

export default Navbar;