import React, {Component} from "react";
import logo from '../Images/a-logo.png';
import cart from '../Images/cart-logo.png';
import dollar from '../Images/dollar.png';
import down from '../Images/arrow-down.png';

import '../Styles/Navbar.css';

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
                <div>
                   <img src={dollar} alt="dollar" />
                   <img src={down} alt="arrow"/>
                </div>
                <img src={cart} alt="cart-logo"/>
             </div> 
           </nav>
        )
    }
}

export default Navbar;