import React from "react";
import "./Blog.css"
import img from "../../assets/Mask Group.png"
import photo from"../../assets/Mask Group (1).png"



function Blog() {
    return(
        <div className="blog">
            <div className="container">
                <div className="blog__title">
                    <p>LETEST NEWS</p>
                    <h2>From Our Blog</h2>
                </div>
                <div className="blog__box">
                    <div className="blog__card">
                        <img src={img} alt="" />
                        <h2>2020 Interior Design Trends</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua.</p>
                        <button className="blog__btn">CONTINUE READING....</button>
                    </div>
                    <div className="blog__card">
                        <img src={photo} alt="" />
                        <h2>28 Notable Product at ARC Interio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        incididunt ut labore et dolore magna aliqua.</p>
                        <button className="blog__btn">CONTINUE READING....</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default Blog