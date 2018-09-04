import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { Redirect } from "react-router";
import Header from "./HeadTail/Header";
import styles from "./Login.css";

class SignUp extends Component {
  constructor() {
    super();
      this.state = { 
        user: "", 
        email: "",
        password: "", 
        loginRedirect: false, 
        problemOccured: false 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // 
    handleSubmit(events){
        events.preventDefault();
        const value = { userName: events.target.name.value, email: events.target.email.value, password: events.target.password.value };
        return fetch("/api/users/register", {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
            this.setState({ loginRedirect: true });
            return res;
          })
          .catch(err => console.log(err));

    }

    render(){
        if (this.state.loginRedirect) {
          return <Redirect push to="/" />;
        }
        return (<div>
            <Header name='Log In'/>
            <center className="signUp">
              <h1>Sign Up</h1>
              <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" type="text" name="name" placeholder="UserName" />
                <br />
                <input className="input" type="text" name="email" placeholder="Email" />
                <br />
                <input className="input" type="password" name="password" placeholder="Password" />
                <br />
                <button id="signUpBtn" className="input">
                  Submit
                </button>
              </form>
            </center>
        </div>);
    }
}

export default SignUp;