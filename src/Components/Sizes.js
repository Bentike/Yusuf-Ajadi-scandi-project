import React, {Component} from "react";

class Sizes extends Component{
    render(){
        return(
            <div>
                <div className="sizes">
                    <p>{this.props.size}</p>
                </div>
            </div>
        )
    }
}

export default Sizes;