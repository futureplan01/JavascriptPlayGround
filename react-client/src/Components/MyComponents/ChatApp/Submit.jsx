import React, { Component } from "react";
import openSocket from "socket.io-client";

let url = window.location.href;

const socket = openSocket(url);


class Submit extends Component {
  
  constructor() {
    super();
    this.state = { text: "", readMessage: "" };
    this.sendSocketIO = this.sendSocketIO.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  sendSocketIO(e) {
    if (e.key === "Enter") {
      socket.emit("user", this.props.name + ": " + e.target.value);
      this.setState({
        text: ""
      });
    }
  }

  render() {
    socket.on('user', (msg) => {
      console.log(msg);
    });
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