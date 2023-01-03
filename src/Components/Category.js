import React, {Component} from "react";
import Product from "./Product";
import Navbar from "./Navbar";
import '../Styles/Category.css';
import wool from '../Images/wool.png';

class Category extends Component{
  constructor(props){
    super(props);
    this.cartOnOff = React.createRef();
  }
    render(){
       
        const handleMouseEnter = () => {
            console.log(this.cartOnOff.current.style)
        }

        return(
            <div className="category">
                <Navbar/>
                <h2 className="header">Category name</h2>
                <div className="product-container">
                    <Product ref={this.cartOnOff} handleMouseEnter={handleMouseEnter} photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                    <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
                </div>
            </div>
        );
    }
}

export default Category;