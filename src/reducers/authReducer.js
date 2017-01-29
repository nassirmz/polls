import { AUTH_SUCCESS, AUTH_FAILURE, LOGOUT, RESET_ERROR_MESSAGE } from '../constants/ActionTypes';

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
    case RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
}