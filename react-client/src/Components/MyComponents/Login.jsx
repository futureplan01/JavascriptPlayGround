import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import styles from "./Login.css";

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
      "Username11: " +
        events.target.name.value +
        " Email:  " +
        events.target.email.value
    );
    return fetch("http://localhost:7555/api/users", {
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
    return <center>
        <form id="form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="name" placeholder="UserName" />
            <br/>
            <input type="text" name="email" placeholder="Email" />
          </label>
          <br />
          <input type="submit" value="Submit" onChange={this.handleSubmit} />
        </form>
      </center>;
  }
}

export default Login;
