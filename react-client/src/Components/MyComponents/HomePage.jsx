import React, {Component} from 'react';

// how would i make element work into the app.


class HomePage extends Component {
  render() {
    return (
      <div>
			<center><h1>You're The Coolest {this.props.name}</h1></center>
      </div>
    );
  }
}

export default HomePage;