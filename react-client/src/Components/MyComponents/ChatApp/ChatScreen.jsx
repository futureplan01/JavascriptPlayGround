import React, { Component } from "react";
import styles from "../Login.css";
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);


class ChatScreen extends Component {
  constructor() {
    super();
      this.state = {
          message: '',
          messages: [] };
      socket.on("user", (data) => {
          console.log(data);
          this.state.messages.push(data);
          this.setState({ message: data});
      });


  }
  render(){
      return <div className="chatScreen">
          {this.state.messages.map(data => { 

              return <h3
                  className = 'chat' key={data.user + ":" + data.index}
                >
                  {data.user + ": " + data.message}
                </h3>;
            })}
        </div>;
  }
}

export default ChatScreen;