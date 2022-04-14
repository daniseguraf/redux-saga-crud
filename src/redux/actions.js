import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from './actionsTypes';

const loadUsersStart = () => ({ action: LOAD_USERS_START });

const loadUsersSuccess = (users) => ({
  action: LOAD_USERS_SUCCESS,
  payload: users,
});

const loadUsersError = (error) => ({
  action: LOAD_USERS_ERROR,
  payload: error,
});

export { loadUsersStart, loadUsersSuccess, loadUsersError };
