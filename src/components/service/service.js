import React from "react";
import "./service.css"
import image from "../../assets/sr.png"

function Service() {
    return(
        <div className="service">
            <div className="container">
                <div className="service__title">
                    <p>WHAT WE DO</p>
                    <h2>Our Service</h2>
                </div>
                <div className="service__box">
                    <div className="service__card">
                        <div className="card__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="card__desc">
                        <p className="card__title">Interior Design</p>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                    </div>
                    <div className="service__card">
                        <div className="card__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="card__desc">
                        <p className="card__title">Interior Design</p>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                    </div>
                    <div className="service__card">
                        <div className="card__img">
                            <img src={image} alt="" />
                        </div>
                        <div className="card__desc">
                        <p className="card__title">Interior Design</p>
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
export default Service