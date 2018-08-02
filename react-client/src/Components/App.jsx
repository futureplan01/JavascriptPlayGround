// Will be used to store the routes for the various (React) routes

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Login from './Login';

class App extends Component{
	render(){
		return(
			<Router>
				<div>
					<Login/>
				</div>
			</Router>
		);
	}
}

export default App;
