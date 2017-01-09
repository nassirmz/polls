import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from 'App';
import Signup from 'Signup';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="signup" component={Signup} />
    </Route>
  </Router>,
  document.getElementById('app'),
);