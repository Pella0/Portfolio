import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import Navbar from './Navbar';
import history from '../history';

const App = () => {
  return (
    <div className="global-page">
      <Router history={history}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" />
            <Route exact path="/customer/:id" /* component={Customer} */ />
            <Route exact path="/work/:id" /* component={Work} */ />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
