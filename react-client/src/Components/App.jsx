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
      isAuth: false
    };
    this.getUser = this.getUser.bind(this);
    this.checkSession = this.checkSession.bind(this);
  }
  getUser(user) {
    this.setState({ name: user, isAuth: true});
  }
  checkSession() {
    axios.get('/api/users/isLoggedIn').then(res => {
      console.log(res);
      if (res.data && this.state.isAuth === false) {
        this.setState({ name: res.data.name, isAuth: true});
      } 
    });
  }
  render() {
    this.checkSession();
    return (<Router>
        <Switch>
          <Route exact path="/" render={() => 
            <Login getUser={this.getUser} name="" />
          } />
          <Route path="/Home" render={() => <Home name={this.state.name} isAuth={this.state.isAuth} />} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
        </Router>);
  }
}

export default App;