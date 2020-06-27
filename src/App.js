import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Repositories from "./containers/Repositories";
import Repository from "./containers/Repository";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/repos/:owner/:name" component={Repository} />
          <Route path="/" component={Repositories} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
