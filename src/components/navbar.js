import React from "react";
import "../css/Navbar.css";

function Navbar(){
    let url = "#";
    return(
        <div className= "nav-container">
            <h1>Port/folio</h1>
            <div className = "empty"></div>
            <ul>
                <div className="list-item">
                    <li><a href={url}><i class="fas fa-home"></i></a></li>
                    <p>Home</p>
                </div>
                <div className="list-item">
                    <li><a href={url}><i class="fas fa-user"></i></a></li>
                    <p>Profile</p>
                </div>
                <div className="list-item">
                    <li><a href={url}><i class="fas fa-envelope"></i></a></li>
                    <p>Contact</p>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;