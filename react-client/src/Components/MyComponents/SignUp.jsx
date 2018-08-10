import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import { Redirect } from "react-router";
import styles from "./Login.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = { user: "", email: "", password: "", loginRedirect: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
    // 
    handleSubmit(events){
        events.preventDefault();
        const value = { userName: events.target.name.value, email: events.target.email.value, password: events.target.password.value };
        let url = window.location.href;
        let res = url.split("/SignUp");
        console.log(res);
        return fetch(res[0] + "/api/users/register", {
          method: "POST",
          body: JSON.stringify(value),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => {
            console.log("hellppp");
            this.setState({ loginRedirect: true });
            return res;
          })
          .catch(err => console.log(err));

    }

    render(){
        if (this.state.loginRedirect) {
          return <Redirect push to="/" />;
        }
        return <div id="SignUp">
            <center>
              <form className="form" onSubmit={this.handleSubmit}>
                <label>
                  <input type="text" name="name" placeholder="UserName"/>
                  <br />
                  <input type="text" name="email" placeholder="Email"/>
                  <br />
                  <input type="password" name="password" placeholder = 'Password'/>
                </label>
                <br />
                <button>Submit</button>
              </form>
            </center>
          </div>;
    }
}

export default SignUp;