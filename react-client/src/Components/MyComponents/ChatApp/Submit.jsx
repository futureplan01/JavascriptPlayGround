import React, { Component } from "react";
import openSocket from "socket.io-client";
import { timingSafeEqual } from "crypto";

let url = window.location.href;

const socket = openSocket(url);


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
      socket.emit("user", {
        user: this.props.name,
        message: e.target.value,
        index: this.state.index
     });
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