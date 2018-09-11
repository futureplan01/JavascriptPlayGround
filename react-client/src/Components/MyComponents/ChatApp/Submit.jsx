import React, { Component } from "react";
import openSocket from "socket.io-client";
import { timingSafeEqual } from "crypto";

let url = window.location.href;



class Submit extends Component {
  
  constructor() {
    super();
    this.state = { text: "", index: 0 };
    this.sendSocketIO = this.sendSocketIO.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  sendSocketIO(e) {
    if (e.key === "Enter") {
      let message = {
        user: this.props.name,
        message: e.target.value,
        index: this.state.index
      }

      this.props.socket.emit("server", message);

      // flag from sender
      message.sender = true;

      // adds to chatMessage Array
      this.props.addMessage(message);

      // need to send this to chatScreen
      this.setState({ text: "", index: this.state.index + 1 });
    }
  }

  render() {
    return (
      <input
        id="submit"
        onKeyPress={this.sendSocketIO}
        onChange={this.handleChange}
        value={this.state.text}
        type="text"
        name="chat"
        placeholder="Send Message"
      />
    );
  }
}

export default Submit;