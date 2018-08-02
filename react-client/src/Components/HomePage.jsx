import React, {Component} from 'react';
const name = 'JJ Prayor';
// how would i make element work into the app.
const element = <h1> You're the coolest, {name}</h1>;

class HomePage extends Component {
	render(){
		return (
			<div>
			<h1>You're The Coolest, {name}</h1>
			</div>
		);
	}
}

export default HomePage;