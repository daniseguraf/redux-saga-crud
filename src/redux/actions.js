import * as types from './actionsTypes';

// GET USERS
export const getUsersRequest = () => ({ type: types.GET_USERS_REQUEST });

export const getUsersSuccess = (users) => ({
  type: types.GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersError = (error) => ({
  type: types.GET_USERS_ERROR,
  payload: error,
});

// CREATE USER
export const createUserRequest = (user) => ({
  type: types.CREATE_USER_REQUEST,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: types.CREATE_USER_ERROR,
  payload: error,
});

// DELETE USER
export const deleteUserRequest = (userId) => {
  return {
    type: types.DELETE_USER_REQUEST,
    payload: userId,
  };
};

export const deleteUserSuccess = (userId) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: types.DELETE_USER_ERROR,
  payload: error,
});

// Update User
export const updateUserRequest = (userInfo) => ({
  type: types.UPDATE_USER_REQUEST,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: types.UPDATE_USER_ERROR,
  payload: error,
});

// SEARCH USER
export const searchUserRequest = (query) => ({
  type: types.SEARCH_USER_REQUEST,
  payload: query,
});

export const searchUserSuccess = (users) => ({
  type: types.SEARCH_USER_SUCCESS,
  payload: users,
});

export const searchUserError = (error) => ({
  type: types.SEARCH_USER_ERROR,
  payload: error,
});

// FILTER USER
export const filterUserRequest = (value) => ({
  type: types.FILTER_USER_REQUEST,
  payload: value,
});

export const filterUserSuccess = (users) => ({
  type: types.FILTER_USER_SUCCESS,
  payload: users,
});

export const filterUserError = (error) => ({
  type: types.FILTER_USER_ERROR,
  payload: error,
});

// SORT USER
export const sortUserRequest = (value) => ({
  type: types.SORT_USER_REQUEST,
  payload: value,
});

export const sortUserSuccess = (users) => ({
  type: types.SORT_USER_SUCCESS,
  payload: users,
});

export const sortUserError = (error) => ({
  type: types.SORT_USER_ERROR,
  payload: error,
});
