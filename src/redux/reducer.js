import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
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

  // Delete user
  if (action.type === DELETE_USER_START) {
    return { ...state, loading: true };
  }
  if (action.type === DELETE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      users: state.users.filter((el) => el.id !== action.payload),
    };
  }
  if (action.type === DELETE_USER_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  // Update user
  if (action.type === UPDATE_USER_START) {
    return { ...state, loading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
};

export default usersReducer;
