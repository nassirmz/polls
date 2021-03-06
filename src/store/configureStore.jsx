import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import DevTools from 'devTools';
import reducer from '../reducers';

const store = createStore(reducer, compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument(),
));

export default store;
