import React, {Component} from 'react';
import ChatHeader from './ChatApp/Header'
import ChatScreen from "./ChatApp/ChatScreen";
import Submit from "./ChatApp/Submit";
import Header from "./HeadTail/Header";
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);

class HomePage extends Component {
  constructor(){
    super();
    this.state = { message: "", messages: []};
    this.addMessage = this.addMessage.bind(this);
  }
  addMessage(data){
    console.log('hey');
    this.state.messages.push(data);
    this.setState({ message: data});
  }
  render() {
    socket.on("user", (data) => {
      console.log(data);
      this.state.messages.push(data);

      // Re renders to screen
      this.setState({ message: data});
  });
    return (<div>
      <Header name = 'Log Out'/>
        <ChatHeader name={this.props.name} />
        <ChatScreen name={this.props.name} socket={socket} messages = {this.state.messages}/>
      <Submit name={this.props.name} addMessage = {this.addMessage} socket={socket}/>
    </div>);
  }
}

export default HomePage;