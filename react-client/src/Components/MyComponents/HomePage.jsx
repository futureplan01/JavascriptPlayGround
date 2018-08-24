import React, {Component} from 'react';
import Header from './ChatApp/Header'
import ChatScreen from "./ChatApp/ChatScreen";
import Submit from "./ChatApp/Submit";
//Header

// Chat Screen

//Submit

class HomePage extends Component {
  
  render() {
    return <div>
        <Header name={this.props.name} />
        <ChatScreen name={this.props.name}/>
        <Submit/>
      </div>;
  }
}

export default HomePage;