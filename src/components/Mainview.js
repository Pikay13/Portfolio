import React from "react";
import "../css/Mainview.css";
import logo from '../Img/Me.jpeg'

function Mainview(){
    let url = "#";
    return(
        <div className="mainview-container">
            <div id="img-div">
                <img src={logo} alt="my-img"/>
            </div>
            <div id="text-div">
                <h1>Prasad Kirkade</h1>
                <p>Creative Web Developer based in Pune and I love what I do.</p>
                <div className="social-icons">
                    <ul>
                    <li><a href = {url}><i class="fab fa-instagram"></i></a></li>
                    <li><a href = {url}><i class="fab fa-facebook"></i></a></li>
                    <li><a href = {url}><i class="fab fa-twitter"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mainview;