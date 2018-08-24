import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./MyComponents/HomePage";
import { Redirect } from "react-router";
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
  }
  getUser(user) {
    this.setState({ name: user, isAuth: true});
  }
  
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" render={() => <Login getUser={this.getUser} name="" />} />
          <Route path="/Home" render={() => <Home name={this.state.name} isAuth={this.state.isAuth} />} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>;
  }
}

export default App;