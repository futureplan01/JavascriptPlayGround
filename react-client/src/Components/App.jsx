import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./MyComponents/HomePage";
import { Redirect } from "react-router";
import axios from "axios";
import Login from "./MyComponents/Login";
import SignUp from "./MyComponents/SignUp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      isAuth: false,
      redirect: false
    };
    this.getUser = this.getUser.bind(this);
    this.checkSession = this.checkSession.bind(this);
    this.changeAuth = this.changeAuth.bind(this);
    this.getAuth = this.getAuth.bind(this);
  }
  /*
  Set User's Info using setState method
  Set's isAuth to true
  */
  getUser(user) {

  }
  // Return The state of isAuth
  getAuth(){

  }

  changeAuth(value){
    console.log("Auth is: " + this.state.isAuth);
    this.setState({isAuth: false});
  }
  render() {
    return (
        <Router>
        <Switch> 
          <Route exact path="/" render={() => 
            <Login getUser={this.getUser} isAuth= {this.state.isAuth} changeAuth={this.changeAuth} getAuth={this.getAuth} />
          }/>
          <Route path="/Home" render={() => <Home name={this.state.name} unAuth = {this.unAuth} checkSession = {this.checkSession} isAuth={this.state.isAuth} />} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
        </Router>);
  }
}

export default App;