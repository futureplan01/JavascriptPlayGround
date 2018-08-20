import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./MyComponents/HomePage";
import { Redirect } from "react-router";
import NavBar from "./HeaderComponent/NavBar";
import Login from "./MyComponents/Login";
import SignUp from "./MyComponents/SignUp";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.getUser = this.getUser.bind(this);
  }
  getUser(user) {
    this.setState({name: user});
  }
  
  render() {
    return <Router>
        <Switch>
          <Route exact path="/" render={() => <Login getUser={this.getUser} name="" />} />
          <Route path="/" render={() => <Home name={this.state.name} />} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>;
  }
}

export default App;