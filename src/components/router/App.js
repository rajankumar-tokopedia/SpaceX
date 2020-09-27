import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Launches from "../pages/launches/launches";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={Launches} />
  </Switch>
);

export default App;
