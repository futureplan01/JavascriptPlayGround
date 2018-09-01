import React, { Component } from "react";
import Styles from "./Style.css";

function Header(props) {
    let headerName = props.name;
  return <div className="headerDiv">
        <h2 id="header" className="orange"> Majestic Vibes
         <span className='orange col-md-3 offset-md-3"'> {headerName}</span>
        </h2>
    </div>;
}

export default Header;