import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        Input your name, please!
        <input type="text" onChange={this.props.handleNameChange} />
      </div>
    );
  }
}

export default Name;
