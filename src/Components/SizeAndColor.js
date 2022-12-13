import React, {Component} from 'react';

class SizeAndColor extends Component{
    render(){
        return(
            <div>
               <p>Size:</p>
                <div className="sizes">
                    <p>XS</p>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                </div>
                <p>Color:</p>
                <div className="colors">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default SizeAndColor;