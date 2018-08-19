import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Link, Switch, Route } from "react-router-dom";
import Home from "./MyComponents/HomePage";
import NavBar from "./HeaderComponent/NavBar";
import Login from "./MyComponents/Login";
import SignUp from "./MyComponents/SignUp";

class App extends React.Component {

  getUserName = name => {
    console.log("From App");
    console.log(name);
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Login getName={getUserName} />}
          />
          <Route path="/Home" component={Home} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;