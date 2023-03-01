import React, {Component} from "react";

class Sizes extends Component{
    constructor(props){
        super(props);
        this.sizeRef = React.createRef()
    }
    
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