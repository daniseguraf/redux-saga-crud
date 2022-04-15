import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from './actionsTypes';

const loadUsersStart = () => ({ type: LOAD_USERS_START });

const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

const loadUsersError = (error) => ({
  type: LOAD_USERS_ERROR,
  payload: error,
});

export { loadUsersStart, loadUsersSuccess, loadUsersError };
