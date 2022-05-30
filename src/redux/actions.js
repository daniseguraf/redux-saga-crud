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
} from './actionsTypes';

// LOAD USERS
export const loadUsersRequest = () => ({ type: LOAD_USERS_REQUEST });

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: LOAD_USERS_ERROR,
  payload: error,
});

// CREATE USER
export const createUserRequest = (user) => ({
  type: CREATE_USER_REQUEST,
  payload: user,
});

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

// DELETE USER
export const deleteUserRequest = (userId) => {
  return {
    type: DELETE_USER_REQUEST,
    payload: userId,
  };
};

export const deleteUserSuccess = (userId) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: DELETE_USER_ERROR,
  payload: error,
});

// Update User
export const updateUserRequest = (userInfo) => ({
  type: UPDATE_USER_REQUEST,
  payload: userInfo,
});

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: UPDATE_USER_ERROR,
  payload: error,
});

// SEARCH USER
export const searchUserRequest = (query) => ({
  type: SEARCH_USER_REQUEST,
  payload: query,
});

export const searchUserSuccess = (users) => ({
  type: SEARCH_USER_SUCCESS,
  payload: users,
});

export const searchUserError = (error) => ({
  type: SEARCH_USER_ERROR,
  payload: error,
});
