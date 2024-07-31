import React from "react";
import "./Hero.css"
import photo from "../../assets/Group 63 (1).png"

function Hero() {
    return(
        <div className="hero">
            <div className="container">
                <div className="hero__box">
                    <div className="hero__info">
                        <p>MODERN INTERIOR</p>
                        <h2>Create Your Interior Design.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                           veniam, quis nostrud exercitation.</p>
                        <button className="hero__btn">Contact</button>
                    </div>
                    <div className="hero__photo">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero