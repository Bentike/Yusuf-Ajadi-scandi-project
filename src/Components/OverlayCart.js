import React, { Component } from "react";
import photo from "../Images/wool.png"
class OverlayCart extends Component {
  render() {
    return (
      <div>
        <h3>
          My Bag,<span> 3 items</span>
        </h3>
        <div>
          <div>
            <p>Apollo Running Short</p>
            <p>$50.00</p>
            <p>size</p>
            <div>
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
            </div>
            <p>color</p>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
          <div>
              <div>
                 <button>+</button>
                 <p>1</p>
                 <button>-</button>
              </div>
              <div>
                <img src={photo} alt="item"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OverlayCart;
