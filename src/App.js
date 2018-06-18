import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Asha Wilson</h1>
        </header>
        <p className="App-intro">
          Endless possibilities await...
        </p>
      </div>
    );
  }
}

export default App;
