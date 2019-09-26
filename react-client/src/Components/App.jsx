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
 
  // token valid for 1 hour seconds
  updateUser(user) {
    sessionStorage.setItem('token',user.token);
  }

  componentDidMount(){
    window.addEventListener("beforeunload",(ev)=>{
      let token = sessionStorage.getItem('token');
      axios.get('/turnOffline',{
        token: token
      });
    })
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
            <Login />
          }/>
          <Route path="/Home" render={() => <Home />} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
        </Router>);
  }
}

export default App;