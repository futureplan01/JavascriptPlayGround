import React, { Component } from "react";
import styles from "../Login.css";
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);


class ChatScreen extends Component {
  constructor() {
    super();
      this.state = { message: "", messages: [], fromMe: false };
      socket.on("user", (data) => {
          console.log(data);
          this.state.messages.push(data);
          let name = false;
          
          if (this.props.name === data.user) name = true;
          console.log('I am : ' + this.props.name);
          console.log("I got message from : " + data.user);
          this.setState({ message: data, fromMe: name});
      });


  }
  render(){
      const fromMe = this.props.fromMe ? "fromMe" : "";
      return <div className="chatScreen">
          {this.state.messages.map(data => { 
              return (
              <div className='messages' >
                  <h3 className='chat' id={fromMe} key={data.user + ":" + data.index}>
                  {data.user + ": " + data.message}
                </h3>
              </div>);
            })}
        </div>;
  }
}

export default ChatScreen;