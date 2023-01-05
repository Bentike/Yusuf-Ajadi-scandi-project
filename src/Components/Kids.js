import React, {Component} from "react";
import Navbar from "./Navbar";
import Product from "./Product";

class Kids extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <h1>Kids Category</h1>
            </div>
        );
    }
}

export default Kids;