import React, { useState, useEffect } from "react";
import "./styles/Nav.css";
import { Link } from "react-router-dom";
import Github from "./images/github.png"
function Nav() {
  return (
    <nav>
      <Link className="link" to="/">
        <h2>Pokemon</h2>
      </Link>

      <ul id="nav">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/shop">
          Shop
        </Link>
        <img id="github" onClick={() => {window.open("https://github.com/bhargavannem/", "_blank")}}src={Github} width={25} height={25}/>
        </ul>
    </nav>
  );
}

export default Nav;
