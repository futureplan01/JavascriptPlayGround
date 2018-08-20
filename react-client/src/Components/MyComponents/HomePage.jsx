import React, {Component} from 'react';

// how would i make element work into the app.


class HomePage extends Component {
  
  render() {
    console.log("From Home Page");
    console.log(this.props.name);
    return (
      <div>
        <center>
          <h1 id="header">Welcome</h1>
        </center>
      </div>
    );
  }
}

export default HomePage;