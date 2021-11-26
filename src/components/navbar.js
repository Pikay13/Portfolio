import React from "react";
import "../css/Navbar.css";

function Navbar(){
    let url = "#";
    return(
        <div className= "nav-container">
            <h1>Port/folio</h1>
            <div className = "empty"></div>
            <ul>
                <li><a href={url}><i class="fas fa-home"></i></a></li>
                <li><a href={url}><i class="fas fa-user"></i></a></li>
                <li><a href={url}><i class="fas fa-envelope"></i></a></li>
            </ul>
        </div>
    );
}

export default Navbar;