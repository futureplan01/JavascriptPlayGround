import React, {Component} from 'react';
import ChatHeader from './ChatApp/Header'
import ChatScreen from "./ChatApp/ChatScreen";
import Submit from "./ChatApp/Submit";
import Header from "./HeadTail/Header";
//Header

// Chat Screen

//Submit

class HomePage extends Component {
  
  render() {
    return <div>
        <Header/>
        <ChatHeader name={this.props.name} />
        <ChatScreen name={this.props.name}/>
      <Submit name={this.props.name}/>
      </div>;
  }
}

export default HomePage;