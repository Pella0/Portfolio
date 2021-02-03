import React from 'react';
import './App.css';
/* import Navbar from './Navbar'; */
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';

const App = () => {
  return (
    <div className="global-page">
      <Router>
        {/* <Navbar /> */}
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
