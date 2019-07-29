import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Meetup from '../pages/Meetup';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/details" component={Details} />
      <Route path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/meetup" component={Meetup} />
    </Switch>
  );
}
