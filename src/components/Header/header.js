import React from "react";
import "./header.css"
import rasm from "../../assets/Screenshot_3 [Recovered] 1.png"

function Header() {
    return(
        <div className="container">
            <header className="header">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <img src={rasm} alt="" />
                    </div>
                    <div className="navbar__desc">
                        <ul className="navbar__collection">
                            <li className="navbar__item"><a href="#"><span>Home</span></a></li>
                            <li className="navbar__item"><a href="#"><span>Project</span></a></li>
                            <li className="navbar__item"><a href="#"><span>Service</span></a></li>
                            <li className="navbar__item"><a href="#"><span>About</span></a></li>
                            <li className="navbar__item"><a href="#"><span>Blog</span></a></li>
                            <li className="navbar__item"><a href="#"><span>Shop</span></a></li>
                            <li className="navbar__item"><a href="#"><span>Contact</span></a></li>
                        </ul>
                        <button className="navbar__btn">Sign up</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Header