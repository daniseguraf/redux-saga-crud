import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
} from './actionsTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  // Get users
  if (action.type === LOAD_USERS_START) {
    return { ...state, loading: true };
  }
  if (action.type === LOAD_USERS_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }
  if (action.type === LOAD_USERS_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  // Add new user
  if (action.type === CREATE_USER_START) {
    return { ...state, loading: true };
  }
  if (action.type === CREATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }
  if (action.type === CREATE_USER_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
};

export default usersReducer;
