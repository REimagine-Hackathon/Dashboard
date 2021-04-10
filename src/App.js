import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React ,{Fragment}from "react";

import Home from './Home/home'
import Dashboard from './Dashboard/dashboard';


function App() {
return (
    <Router>
    <Fragment>
      <Route exact path='/' component={Home} />
      <section >
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </section>
    </Fragment>
  </Router>
  );
}

export default App;
