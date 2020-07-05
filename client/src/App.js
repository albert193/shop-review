import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Shop from './components/Shop/Shop';
//import * as actions from './store/actions/index';

const app = () => (
  <Switch>
    <Route path="/" exact component={Shop} />
    <Redirect to="/" />
  </Switch>
);

export default app;
