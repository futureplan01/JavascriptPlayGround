import React, {Component} from 'react';
import ChatHeader from './ChatApp/Header'
import ChatScreen from "./ChatApp/ChatScreen";
import Submit from "./ChatApp/Submit";
import Header from "./HeadTail/Header";
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);

// Chat Screen

//Submit

class HomePage extends Component {
  render() {
    return (<div>
      <Header name = 'Log Out'/>
        <ChatHeader name={this.props.name} />
        <ChatScreen name={this.props.name} socket={socket}/>
      <Submit name={this.props.name} socket={socket}/>
    </div>);
  }
}

export default HomePage;