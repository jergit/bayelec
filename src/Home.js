import React, { Component } from 'react';
import logo from './NewLogoBlack.png';
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Bay Electronics, Inc</h2>
        </div>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
