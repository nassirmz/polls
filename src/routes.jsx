import React from 'react';
import { Route } from 'react-router';

import App from 'App';
import SignupPage from 'SignupPage';

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={SignupPage} />
  </Route>
);