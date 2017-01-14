import React from 'react';
import { Route } from 'react-router';

import App from 'App';
import Signup from 'Signup';

export default (
  <Route path="/" component={App}>
    <Route path="signup" component={Signup} />
  </Route>
);