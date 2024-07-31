import React from "react";
import "./Testimonal.css"
function Clients(){
    return(
        <div className="testimonal">
            <div className="container">
                <div className="testimonal__box">
                    <div className="restimonal__title">
                        <p>Testimonal</p>
                        <h2>Client says about us</h2>
                    </div>
                    <div className="testimonal__wrapper">
                        <div className="testimonal__card">
                        <div className="testimonal__desc">
                        <b className="testimonal__title">Louis Savilla<p>/CEO at Google inc</p></b>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                        </div>
                        <div className="testimonal__card">
                        <div className="testimonal__desc">
                        <b className="testimonal__title">RAkha Varadwaz<p>/Manager at Nike inc</p></b>
                         <p>Lorem ipsum dolor amet consectetur
                          adipiscing elit sed eiusmod tempor
                          incididunt ut labore. </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clients