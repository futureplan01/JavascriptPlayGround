import React, { Component } from "react";
import styles from "../Login.css";
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);

// Could Send the socket and a call back function to append the message...

class ChatScreen extends Component {
  render(){
  
      return <div className="chatScreen">
          {this.props.messages.map(data => {
              let sender = data.sender ? 'sender' : '';
              return (
              <div className='messages' >
                  <h3 className = {`chat ${sender}`} key={data.user + ":" + data.index}>
                  {data.user + ": " + data.message}
                </h3>
              </div>);
            })}
        </div>;
  }
}

export default ChatScreen;