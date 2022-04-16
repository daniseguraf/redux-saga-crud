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

// Load Users
export const loadUsersStart = () => ({ type: LOAD_USERS_START });

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = (error) => ({
  type: LOAD_USERS_ERROR,
  payload: error,
});

// Add User
export const createUserStart = (user) => ({
  type: CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS,
});

export const createUserError = (error) => ({
  type: CREATE_USER_ERROR,
  payload: error,
});

// Delete User
export const deleteUserStart = (userId) => {
  return {
    type: DELETE_USER_START,
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
export const updateUserStart = (updatedInfo) => ({
  type: UPDATE_USER_START,
  payload: updatedInfo,
});

export const updateUserSuccess = () => ({
  type: UPDATE_USER_SUCCESS,
});

export const updateUserError = (error) => ({
  type: UPDATE_USER_ERROR,
  payload: error,
});
