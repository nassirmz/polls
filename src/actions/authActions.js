import axios from 'axios';
import { hashHistory } from 'react-router';

import { AUTH_SUCCESS, AUTH_FAILURE } from '../constants/ActionTypes';

export function authSuccess(name) {
  return {
    type: AUTH_SUCCESS,
    name,
    authenticated: true,
  };
}

export function authFailure(errorMessage) {
  return {
    type: AUTH_FAILURE,
    errorMessage,
  };
}

export function startSignup(userCredentials) {
  return (dispatch) => {
    axios.post('/users', userCredentials)
    .then((resp) => {
      window.localStorage.setItem('Auth', resp.headers.auth);
      dispatch(authSuccess(resp.data.username));
      hashHistory.push('/polls');
    })
    .catch(() => {
      dispatch.authFailure('Email is unavailable');
    });
  };
}

