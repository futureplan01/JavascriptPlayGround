import React, { Component } from 'react';
import styles from './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = { userName: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // I want the UserName and email values
  handleSubmit(events) {
    alert("Yo: " + events.target.name.value + " with email " + events.target.email.value);

  }

  render() {
    return (
      <center>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1> User Name </h1>
            <input type="text" name="name" placeholder="Javascript Abuser" />

            <h1> Email </h1>
            <input
              type="text"
              name="email"
              placeholder="JavascriptRocks@gmail.com"
            />
          </label>
          <br />
          <input type="submit" value="Submit" onChange={this.handleSubmit} />
        </form>
      </center>
    );
  }
}

export default Login