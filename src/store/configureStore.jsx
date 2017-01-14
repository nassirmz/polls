import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import DevTools from 'devTools';  // IGNORE ESLINT FLAG: because I'm using aliases
import reducer from '../reducers';

const store = createStore(reducer, compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument(),
));


export default store;