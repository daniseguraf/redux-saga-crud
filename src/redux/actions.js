import * as type from './actionsTypes';

// GET USERS
export const getUsersRequest = () => ({ type: type.GET_USERS_REQUEST });

export const getUsersSuccess = (users) => ({
  type: type.GET_USERS_SUCCESS,
  payload: users,
});

export const getUsersError = (error) => ({
  type: type.GET_USERS_ERROR,
  payload: error,
});

// CREATE USER
export const createUserRequest = (user) => ({
  type: type.CREATE_USER_REQUEST,
  payload: user,
});

export const createUserSuccess = () => ({
  type: type.CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: type.CREATE_USER_ERROR,
  payload: error,
});

// DELETE USER
export const deleteUserRequest = (userId) => {
  return {
    type: type.DELETE_USER_REQUEST,
    payload: userId,
  };
};

export const deleteUserSuccess = (userId) => ({
  type: type.DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: type.DELETE_USER_ERROR,
  payload: error,
});

// Update User
export const updateUserRequest = (userInfo) => ({
  type: type.UPDATE_USER_REQUEST,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: type.UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: type.UPDATE_USER_ERROR,
  payload: error,
});

// SEARCH USER
export const searchUserRequest = (query) => ({
  type: type.SEARCH_USER_REQUEST,
  payload: query,
});

export const searchUserSuccess = (users) => ({
  type: type.SEARCH_USER_SUCCESS,
  payload: users,
});

export const searchUserError = (error) => ({
  type: type.SEARCH_USER_ERROR,
  payload: error,
});

// FILTER USER
export const filterUserRequest = (value) => ({
  type: type.FILTER_USER_REQUEST,
  payload: value,
});

export const filterUserSuccess = (users) => ({
  type: type.FILTER_USER_SUCCESS,
  payload: users,
});

export const filterUserError = (error) => ({
  type: type.FILTER_USER_ERROR,
  payload: error,
});
