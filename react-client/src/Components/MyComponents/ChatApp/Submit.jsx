import React, { Component } from "react";
import openSocket from "socket.io-client";

let url = window.location.href;


const socket = openSocket(url);

const sendSocketIO = (e) => {
  if (e.key === "Enter") {
      console.log("sending from client");
      socket.emit('sup girl')
  }
};

const Submit = (props) =>  {
    return <input id="submit" onKeyPress={sendSocketIO} type="text" name="chat" placeholder="Send Message" />;
}

export default Submit;