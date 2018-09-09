import React, { Component } from "react";
import styles from "../Login.css";
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);

// Could Send the socket and a call back function to append the message...

class ChatScreen extends Component {
  constructor() {
    super();
    this.state = { message: "", messages: [] };
  }
  
  render(){
    this.props.socket.on("user", (data) => {
        console.log(data);
        this.state.messages.push(data);
        
        if (this.props.name === data.user) name = true;
        this.setState({ message: data});
    });
      return <div className="chatScreen">
          {this.state.messages.map(data => { 
              return (
              <div className='messages' >
                  <h3 className='chat' key={data.user + ":" + data.index}>
                  {data.user + ": " + data.message}
                </h3>
              </div>);
            })}
        </div>;
  }
}

export default ChatScreen;