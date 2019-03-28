import React, { Component } from 'react';
import Popular from './Popular';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from "./Nav";
import Home from './Home';
import Battle from './Battle';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route exact path='/' component = {Home} />
          <Route exact path='/battle' component = {Battle} />
          <Route exact path='/popular' component = {Popular} />
          {/* <Switch>

            <Route render= {function () {
              return <p>Not Found</p>
            }} />
          </Switch> */}

        </div>
      </Router>

      );
  }
}

export default App;
