import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Projets from './Projets';
import ProjetsLien from './ProjetsLien';
import Admin from './Admin';
import Home from './Home';

const App = () => {
  return (
    <div className="global-page">
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projets" component={ProjetsLien} />
            <Route exact path="/projets/:id" component={Projets} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
