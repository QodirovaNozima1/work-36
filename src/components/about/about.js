import React from "react";
import "./about.css"
import photo from "../../assets/Group 73.png"

function About() {
    return(
        <div className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__img">
                       <img src={photo} alt="" />
                    </div>
                    <div className="about__desc">
                        <p>About us</p>
                        <h2>Interioris The Will
                        of An Epoch Mextreo</h2>
                        <p>
                        There are many variations of passages of Lorem Ipsum available,
                              but the majority have suffered alteration in some form injected
                              humour, or randomised words which don't look even slightly
                              believable.If you are going to use a passage of Lorem Ipsum,
                              sure there isn't anything embarrassing hidden the middleof text.
                              All the Lorem Ipsum generators on the Internettend to repeat
                              predefined chunks as necessary,making this the first true
                              generator on the Internet.                              
                        </p>
                        <button className="about__btn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
