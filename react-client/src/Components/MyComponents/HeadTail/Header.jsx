import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import Styles from "./Style.css";

class Header extends Component {
  constructor(){
    super();
    this.state = {
      redirect :''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    if (this.props.name == 'Log In') {
      this.setState({ redirect: '/' });
    }
    else if (this.props.name == 'Sign Up') {
      this.setState({ redirect : '/SignUp' });
    }
    else if (this.props.name == 'Log Out') {
      console.log('Destroy Session');
      axios.get('/api/users/destroySession').then(res => {
        console.log('yo');
        this.setState({ redirect: '/' });
      });
    }
  }
  render() {
    let headerName = this.props.name;
    if (this.state.redirect !== ''){
      console.log("Redirecting to: " + this.state.redirect);
      return <Redirect push to={this.state.redirect} />;
    }
    return (<div className="headerDiv">
      <h2 id="header" className="orange"> Majestic Vibes
         <button className="textBtn orange col-md-3 offset-md-3 " onClick={this.handleSubmit}>{headerName}</button>
      </h2>
    </div>);
  }
} 




export default Header;