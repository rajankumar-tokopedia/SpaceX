import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Launches from "../pages/launches/launches";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/launches" component={Launches} />
  </Switch>
);

export default App;
