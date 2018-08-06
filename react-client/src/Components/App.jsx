// Will be used to store the routes for the various (React) routes

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import HomePage from "./MyComponents/HomePage";
import NavBar from "./HeaderComponent/NavBar";
import Login from "./MyComponents/Login";

class App extends Component{
	render(){
		return <Router>
        <div>
				<HomePage name={"JJ"} age={25}/>
          	<Login/>
        </div>
      </Router>;
	}
}

export default App;
