import React, {Component} from "react";
import '../Styles/Category.css';
import Product from "./Product";
import wool from '../Images/wool.png';

class Category extends Component{
    render(){
        return(
            <div className="category">
                <h2>Category name</h2>
                <Product photo={wool} productName='wool hood' productPrice='$50.00'/>
            </div>
        )
    }
}

export default Category;