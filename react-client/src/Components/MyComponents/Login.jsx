import React, { Component } from 'react';
import styles from './Login.css';

class Login extends Component {
  render(){
      return (
      <center>
      <form>
          <label>
            <h1> Email:</h1>
            <input type="text" name="name" placeholder = 'JavascriptRocks@gmail.com'/>

            <h1> Password</h1>
            <input type="text" name="name"/>

            
          </label>
            <br/>
          <input type="submit" value="Submit" />
      </form>;
      </center>);
      
  }
}

export default Login