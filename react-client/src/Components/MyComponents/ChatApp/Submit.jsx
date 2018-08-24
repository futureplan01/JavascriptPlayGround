import React, { Component } from "react";
import openSocket from "socket.io-client";

let fullUrl = window.location.href;
let partUrl = fullUrl.split("/Home");

const socket = openSocket(partUrl[0]);


function sendSocketIO(props){
    socket.emit("hello");
}

const Submit = (props) =>  {
    return <input id="submit" type="text" name="chat" placeholder="Send Message"/>;
}

export default Submit;