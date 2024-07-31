import React from "react";
import "./ability.css"
import image from "../../assets/sr.png"

function Ability() {
    return(
        <div className="ability">
            <div className="container">
                <div className="ability__title">
                    <p>WHAT WE DO</p>
                    <h2>Our Service</h2>
                </div>
                <div className="ability__box">
                    <div className="ability__card">
                        <div className="ability__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="ability__desc">
                        <p className="ability__title">Interior Design</p>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                    </div>
                    <div className="ability__card">
                        <div className="ability__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="ability__desc">
                        <p className="ability__title">Interior Design</p>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                    </div>
                    <div className="ability__card">
                        <div className="ability__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="ability__desc">
                        <p className="ability__title">Interior Design</p>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ability