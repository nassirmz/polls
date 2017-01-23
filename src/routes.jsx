import React from 'react';
import { Route } from 'react-router';

import App from 'App';
import SignupPage from 'SignupPage';
import Polls from 'Polls';

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
    <Route path="polls" component={Polls} />
  </Route>
);