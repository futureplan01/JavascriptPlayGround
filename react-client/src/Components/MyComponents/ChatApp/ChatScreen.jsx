import React, { Component } from "react";
import styles from "../Login.css";
import openSocket from "socket.io-client";

let url = window.location.href;
const socket = openSocket(url);
console.log("From chat screen:" + url);

function readMessage (){
    socket.on("connection",(data) =>{
        console.log(data);
    });
}
function ChatScreen(props) {
    return (
        <div className= "chatScreen"> 
            
        </div>
    );
}

export default ChatScreen;