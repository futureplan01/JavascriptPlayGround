import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import fetch from "isomorphic-fetch";
import axios from "axios";
import styles from "./Login.css";
import SignUp from "./SignUp";
import Home from "./HomePage";
import Problem from "./ProblemOccured";
import Header from "./HeadTail/Header";
import Footer from "./HeadTail/Footer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      signUp: false,
      error: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }


  handleSubmit(events) {
    events.preventDefault();

    axios
      .post(window.location.href + "api/users/login", {
        email: events.target.email.value,
        password: events.target.password.value
      })
      .then(res => {
        console.log(res);
        this.props.getUser(res.data.user.userName);
        this.setState({ login: true});
      })
      .catch(err => {
        this.setState({ problem: true});
        console.log(err);
      });
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
      error = <Problem/>;
    }
    return <div>
        <Header />
        <center>
          <h1>Lets Start Chatting</h1>
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
        </center>
      </div>;
  }
}

export default Login;