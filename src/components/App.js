import React /* , { useEffect } */ from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Router } from 'react-router';
import Navbar from './Navbar';
import history from '../history';
import Projets from './Projets';
import ProjetsLien from './ProjetsLien';

const App = () => {
  return (
    <div className="global-page">
      <Router history={history}>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={ProjetsLien} />
            <Route exact path="/projets/:id" component={Projets} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
