import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_ERROR,
  FILTER_USER_REQUEST,
  FILTER_USER_SUCCESS,
  FILTER_USER_ERROR,
} from './actionsTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  // First Requests
  if (
    action.type === LOAD_USERS_REQUEST ||
    action.type === CREATE_USER_REQUEST ||
    action.type === DELETE_USER_REQUEST ||
    action.type === UPDATE_USER_REQUEST ||
    action.type === SEARCH_USER_REQUEST ||
    action.type === FILTER_USER_REQUEST
  ) {
    return { ...state, loading: true };
  }

  // Errors
  if (
    action.type === LOAD_USERS_ERROR ||
    action.type === CREATE_USER_ERROR ||
    action.type === DELETE_USER_ERROR ||
    action.type === UPDATE_USER_ERROR ||
    action.type === SEARCH_USER_ERROR ||
    action.type === FILTER_USER_ERROR
  ) {
    return { ...state, loading: false, error: action.payload };
  }

  // GET USERS
  if (action.type === LOAD_USERS_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }

  // CREATE USER
  if (action.type === CREATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  // DELETE USER
  if (action.type === DELETE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      users: state.users.filter((el) => el.id !== action.payload),
    };
  }

  // UPDATE USER
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  // SEARCH USER
  if (action.type === SEARCH_USER_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }

  // FILTER USER
  if (action.type === FILTER_USER_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }

  return state;
};

export default usersReducer;
