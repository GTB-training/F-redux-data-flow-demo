import React, { Component } from 'react';
import Name from '../../components/Name';
import Greeting from '../../components/Greeting';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Default Name' };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App" data-testid="app">
        <Name handleNameChange={this.handleNameChange} />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

export default App;
