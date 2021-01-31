import React, {useState, useEffect} from "react"
import "./styles/Nav.css"
import {Link} from "react-router-dom"

function Nav() {
    
    return (
    <nav>
        <h2>Pokemon</h2>
        <ul id="nav">
            <Link className="link" to="/about">About</Link>
            <Link className="link" to="/shop">Shop</Link>
        </ul>
    </nav>
        )
}

export default Nav;