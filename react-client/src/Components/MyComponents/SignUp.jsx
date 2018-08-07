import React, { Component } from "react";
import fetch from "isomorphic-fetch";
import styles from "./Login.css";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { user: "", email: "", password: "" };
  }
    // 
    handleSubmit(events){
        events.preventDefault();
        const value = {
            user: events.target.name.value,
            email: events.target.email.value,
            password: events.target.password.value
        };
        return fetch("http://localhost:7555/api/users", {
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

    render(){
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