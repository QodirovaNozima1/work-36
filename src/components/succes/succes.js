import React from "react";
import "./succes.css"
import img from "../../assets/Group 78.png"
function Succes() {
    return(
        <div className="succes">
            <div className="container">
                <div className="succes__box">
                    <div className="succes__number">
                        <p>20</p>
                        <h2>Years Of Successful
                         Working
                         The Market</h2>
                         <button className="succes__btn">Read more</button>
                    </div>
                    <div className="succes__img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Succes