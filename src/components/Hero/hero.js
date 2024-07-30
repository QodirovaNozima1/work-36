import React from "react";
import "./hero.css"

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
                        <button className="hero__btn">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero