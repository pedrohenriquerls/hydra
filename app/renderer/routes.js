import React from 'react';
import { Switch, Route } from 'react-router';

import IndexPage from './containers/IndexPage';
import LoggedInPage from './containers/LoggedInPage';

export default (
  <Switch>
    <Route exact path="/" component={IndexPage} />
    <Route exact path="/loggedin" component={LoggedInPage} />
  </Switch>
);
