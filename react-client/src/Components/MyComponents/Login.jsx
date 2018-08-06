import React, { Component } from 'react';
import fetch from "isomorphic-fetch";
import styles from './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = { userName: "", email: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit(events) {
    events.preventDefault();
    const value = { 
      user: events.target.name.value, 
      email: events.target.email.value 
    };

    alert(
      "Yo, Son: " +
      events.target.name.value +
      " with email " +
      events.target.email.value
    );
    return fetch("http://localhost:7555/", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("sucess");
        return res;
      })
      .catch(err => console.log(err));
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