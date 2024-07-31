import React from "react";
import "./signup.css"


function Signup() {
    return(
        <div className="signup">
            <div className=".container">
                <div className="signup__title">
                    <h2>DON’T FORGET TO SIGN UP</h2>
                    <hr />
                    <p>Find out early about all upcoming promotions and new product releases with
                    our newsletter.</p>
                </div>
                <div className="signup__input">
                    <input type="text" placeholder=" Enter your email address....."/>
                    <button className="signup__btn">SUBSCRIBE</button>
                </div>
             </div>
        </div>
    )
}
export default Signup