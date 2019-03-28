import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import LIFECYCLE from './components/LIFECYCLE';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LIFECYCLE />
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
