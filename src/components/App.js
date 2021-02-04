import React /* , { useEffect } */ from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Projets from './Projets';
import ProjetsLien from './ProjetsLien';
import Admin from './Admin';

const App = () => {
  return (
    <div className="global-page">
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" />
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
