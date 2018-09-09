import React, { Component } from "react";

class Message extends Component{
    render() {
        //
        const messages = this.props.messages.map((message, i) => {
            return (
              <Message
                key={i}
                username={message.username}
                message={message.message}
                fromMe={message.fromMe} />
            );
          });
        return (
          <div className='chat' id='messageList'>
            { messages }
          </div>
        );
    }
}

