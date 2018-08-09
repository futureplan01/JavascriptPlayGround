import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Link, Switch, Route } from "react-router-dom";
import HomePage from "./MyComponents/HomePage";
import NavBar from "./HeaderComponent/NavBar";
import Login from "./MyComponents/Login";
import SignUp from "./MyComponents/SignUp";

class App extends React.Component {
  render() {
    return (
		<Router>
      <div>
        <div>
		<HomePage/>
          <Link to="/">Login</Link>
          <Link to="/SignUp">SignUp</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/SignUp" exact component={SignUp} />
        </Switch>
      </div>
	  </Router>
    );
  }
}

export default App;