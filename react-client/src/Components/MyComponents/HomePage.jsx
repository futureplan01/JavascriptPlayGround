import React, {Component} from 'react';
import ChatHeader from './ChatApp/Header'
import ChatScreen from "./ChatApp/ChatScreen";
import Submit from "./ChatApp/Submit";
import Header from "./HeadTail/Header";
import Message from './ChatApp/Message';
import openSocket from "socket.io-client";

const socket = openSocket(window.location.href);

class HomePage extends Component {
  constructor(){
    super();
    this.state = { message: "", messages: []};
    this.addMessage = this.addMessage.bind(this);
  }
  addMessage(data){
    // adds message to array 
    this.state.messages.push(data);
    console.log('added from function');
    this.setState({ message: data});
  }

  
  render() {
    socket.on("user", (data) => {
      let lastIndex = this.state.messages.length - 1;

      if( this.state.messages.length == 0 || data.index !== this.state.messages[lastIndex].index && data.message === this.state.messages[lastIndex].message ){
        console.log(data);
        this.state.messages.push(data);
        this.setState({ message: data});
      }else{
        if(!(data.index === this.state.messages[lastIndex].index && data.user === this.state.messages[lastIndex].user )){
          this.state.messages.push(data);
          this.setState({ message: data});
        }
  
      }
      
  });
    this.props.checkSession();
    let invokeUnAuth = this.props.unAuth;
    return (<div>
      <Header unAuth={invokeUnAuth} name = 'Log Out'/>
        <ChatHeader name={this.props.name} />
        <ChatScreen name={this.props.name} messages = {this.state.messages}/>
      <Submit name={this.props.name} addMessage = {this.addMessage} socket={socket}/>
    </div>);
  }
}

export default HomePage;