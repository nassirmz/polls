import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT } from '../constants/ActionTypes';

const authState = {
  authenticated: false,
  errorMessage: '',
  name: '',
};

export default function authReducer(state = authState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        name: action.name,
        authenticated: action.authenticated,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: action.authenticated,
      };
    default:
      return state;
  }
}