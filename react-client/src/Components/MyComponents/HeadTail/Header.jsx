import React, { Component } from "react";
import Styles from "./Style.css";

function Header(props) {
  return <div className="headerDiv">
        <h2 id="header" className="orange"> Majestic Vibes
         <span className='orange col-md-3 offset-md-3"'> Sign Up</span>
        </h2>
    </div>;
}

export default Header;