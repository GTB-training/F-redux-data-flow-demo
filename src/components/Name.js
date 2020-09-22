import React, { Component } from 'react';
import './Name.scss';

class Name extends Component {
  render() {
    return (
      <div className="Name">
        <h4 className="name-input-title">Please enter your name:</h4>
        <input type="text" onChange={this.props.handleNameChange} className="welcome-name-input" />
      </div>
    );
  }
}

export default Name;
