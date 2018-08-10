import React, { Component } from "react";
import { Redirect } from "react-router";
import fetch from "isomorphic-fetch";
import styles from "./Login.css";
import SignUp from "./SignUp";

class Login extends Component {
  constructor() {
    super();
    this.state = { userName: "", email: "", redirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSubmit(events) {
    events.preventDefault();

    const value = {
      email: events.target.email.value, 
      password: events.target.password.value };

    return fetch(window.location.href + "api/users/login", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("success");
        return res;
      })
      .catch(err => console.log(err));
  }
  handleSignUp(events) {
    events.preventDefault();
    this.setState({ redirect: true });
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/SignUp" />;
    }
    return <center>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
          <input type="text" name="email" placeholder="Email" />
            <br />
            <input type="password" name="password" placeholder="Password" />
          </label>
          <br />
          <input type="submit" />
        </form>

        <button onClick={this.handleSignUp}>SignUp</button>
      </center>;
  }
}

export default Login;