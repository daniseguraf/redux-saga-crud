import * as types from './actionsTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  // First Requests
  if (
    action.type === types.GET_USERS_REQUEST ||
    action.type === types.CREATE_USER_REQUEST ||
    action.type === types.DELETE_USER_REQUEST ||
    action.type === types.UPDATE_USER_REQUEST ||
    action.type === types.SEARCH_USER_REQUEST ||
    action.type === types.FILTER_USER_REQUEST ||
    action.type === types.SORT_USER_REQUEST
  ) {
    return { ...state, loading: true };
  }

  // Errors
  if (
    action.type === types.GET_USERS_ERROR ||
    action.type === types.CREATE_USER_ERROR ||
    action.type === types.DELETE_USER_ERROR ||
    action.type === types.UPDATE_USER_ERROR ||
    action.type === types.SEARCH_USER_ERROR ||
    action.type === types.FILTER_USER_ERROR ||
    action.type === types.SORT_USER_ERROR
  ) {
    return { ...state, loading: false, error: action.payload };
  }

  // Success
  // GET USERS, SEARCH USER, FILTER USER, SORT USER
  if (
    action.type === types.GET_USERS_SUCCESS ||
    action.type === types.SEARCH_USER_SUCCESS ||
    action.type === types.FILTER_USER_SUCCESS ||
    action.type === types.SORT_USER_SUCCESS
  ) {
    return { ...state, loading: false, users: action.payload };
  }

  // CREATE USER
  if (action.type === types.CREATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  // DELETE USER
  if (action.type === types.DELETE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
      users: state.users.filter((el) => el.id !== action.payload),
    };
  }

  // UPDATE USER
  if (action.type === types.UPDATE_USER_SUCCESS) {
    return {
      ...state,
      loading: false,
    };
  }

  return state;
};

export default usersReducer;
