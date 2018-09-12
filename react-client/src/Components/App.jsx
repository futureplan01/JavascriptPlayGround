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
    this.unAuth = this.unAuth.bind(this);
    this.getAuth = this.getAuth.bind(this);
  }
  getUser(user) {
    this.setState({ name: user, isAuth: true});
  }
  getAuth(){
    console.log('getting auth');
    return this.state.isAuth;
  }
  unAuth(){
    console.log("Auth is: " + this.state.isAuth);
    this.setState({isAuth: false});
  }
  checkSession() {
    axios.get('/api/users/isLoggedIn').then(res => {
      if (res.data && this.state.isAuth === false) {
        this.setState({ name: res.data.name, isAuth: true, redirect: true});
      } 
    });
  }
  render() {
    return (
        <Router>
        <Switch>
          <Route exact path="/" render={() => 
            <Login getUser={this.getUser} isAuth= {this.state.isAuth} get={this.getAuth} checkSession = {this.checkSession} name="" />
          }/>
          <Route path="/Home" render={() => <Home name={this.state.name} unAuth = {this.unAuth} checkSession = {this.checkSession} isAuth={this.state.isAuth} />} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
        </Router>);
  }
}

export default App;