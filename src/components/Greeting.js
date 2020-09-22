import React, { Component } from 'react';
import './Greeting.scss';

class Greeting extends Component {
  render() {
    return (
      <div className="Greeting">
        <h2>
          Welcome,
          <span className="welcome-name">{this.props.name}</span>!
        </h2>
      </div>
    );
  }
}

export default Greeting;
