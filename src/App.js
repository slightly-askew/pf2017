//@flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

injectGlobal`normalize(excludeOpinionated: true)`;

class App extends Component {
  render() {
    console.log(logo);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
