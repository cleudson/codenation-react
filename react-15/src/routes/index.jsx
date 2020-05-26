import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FeedRoute from './FeedRoute';
import NewUserRoute from './NewUserRoute';
import UsersRoute from './UsersRoute';
import ProfileRoute from './ProfileRoute';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <FeedRoute />
    </Route>
    <Route path="/newuser">
      <NewUserRoute />
    </Route>
    <Route exact path="/users">
      <UsersRoute />
    </Route>
    <Route path="/users/:username">
      <ProfileRoute />
    </Route>
  </Switch>
);

export default Routes;
