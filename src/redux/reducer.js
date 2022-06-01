import * as type from './actionsTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  // First Requests
  if (
    action.type === type.GET_USERS_REQUEST ||
    action.type === type.CREATE_USER_REQUEST ||
    action.type === type.DELETE_USER_REQUEST ||
    action.type === type.UPDATE_USER_REQUEST ||
    action.type === type.SEARCH_USER_REQUEST ||
    action.type === type.FILTER_USER_REQUEST
  ) {
    return { ...state, loading: true };
  }

  // Errors
  if (
    action.type === type.GET_USERS_ERROR ||
    action.type === type.CREATE_USER_ERROR ||
    action.type === type.DELETE_USER_ERROR ||
    action.type === type.UPDATE_USER_ERROR ||
    action.type === type.SEARCH_USER_ERROR ||
    action.type === type.FILTER_USER_ERROR
  ) {
    return { ...state, loading: false, error: action.payload };
  }

  // GET USERS
  if (action.type === type.GET_USERS_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }

  // CREATE USER
  if (action.type === type.CREATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  // DELETE USER
  if (action.type === type.DELETE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      users: state.users.filter((el) => el.id !== action.payload),
    };
  }

  // UPDATE USER
  if (action.type === type.UPDATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  // SEARCH USER
  if (action.type === type.SEARCH_USER_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }

  // FILTER USER
  if (action.type === type.FILTER_USER_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }

  return state;
};

export default usersReducer;
