import React, { Component } from "react";
import { Redirect } from "react-router";
import fetch from "isomorphic-fetch";
import styles from "./Login.css";
import SignUp from "./SignUp";
import Problem from "./ProblemOccured";

class Login extends Component {
  constructor() {
    super();
    this.state = {
       userName: "", 
       email: "", 
       signUp: false, 
       login: false,
      problem: false
    };
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
    }) // Successful
      .then(
        res => {
          console.log("success");
          console.log(res);
          this.setState({ login: true });
          return res;
        }).catch(
          console.log("error")
        );
      
  }
  handleSignUp(events) {
    events.preventDefault();
    this.setState({ signUp: true });
  }
  render() {
    let error;
    if (this.state.signUp) {
      return <Redirect push to="/SignUp" />;
    }
    if (this.state.login) {
      return <Redirect push to="/Home" />;
    }
    if (this.state.problem) {
      error =  <Problem />;
    }
    return <center>
        <h1 id="header">It's Purrrrrrrrrrfect</h1>
      {error}
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