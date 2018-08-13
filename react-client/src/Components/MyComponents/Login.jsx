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

    axios
      .post(window.location.href + "api/users/login", {
        email: events.target.email.value,
        password: events.target.password.value
      })
      .then(res => {
        this.setState({ login: true});
      })
      .catch(err => {
        this.setState({ problem: true });
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
      <Link></Link>
      return <Redirect push to="/SignUp" />;
    }
    if (this.state.login) {
      return <Home/>;
    }
    if (this.state.problem) {
      return <Route path="Home" exact component={Home} />
    }
    return (
      <center>
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
        <Switch>
          <Route path="/Home" exact component={Home} />
        </Switch>
    </center>);
 

  }
}

export default Login;