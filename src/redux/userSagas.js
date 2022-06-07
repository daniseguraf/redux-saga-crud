import {
  take,
  takeEvery,
  takeLatest,
  put,
  delay,
  fork,
  call,
} from 'redux-saga/effects';
import * as types from './actionsTypes';

import {
  getUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
  searchUserApi,
  filterUserApi,
  sortUserApi,
} from './api';

import {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  createUserRequest,
  createUserSuccess,
  createUserError,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
  searchUserRequest,
  searchUserSuccess,
  searchUserError,
  filterUserRequest,
  filterUserSuccess,
  filterUserError,
  sortUserRequest,
  sortUserSuccess,
  sortUserError,
} from './features/users/usersSlice';

// Get users
function* onGetUsersRequest() {
  try {
    const response = yield call(getUsersApi);

    if (response.status === 200) {
      yield delay(250);
      yield put(
        getUsersSuccess({
          users: response.data,
          // currentPage: action.payload.currentPage,
        })
      );
    }
  } catch (error) {
    yield put(getUsersError(error?.response?.data));
  }
}

// Create user
function* onCreateUserRequest(action) {
  try {
    const response = yield call(createUserApi, action.payload);

    if (response.status === 201) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

// Delete user
function* onDeleteUserRequest(id) {
  try {
    const response = yield call(deleteUserApi, id);

    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(id));
    }
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

// Update user
function* onUpdateUserRequest(action) {
  try {
    const response = yield call(updateUserApi, action.payload);

    if (response.status === 200) {
      yield put(updateUserSuccess(response.data));
    }
  } catch (error) {
    yield put(updateUserError(error.response.data));
  }
}

// Search user
function* onSearchUserRequest({ payload: query }) {
  try {
    const response = yield call(searchUserApi, query);

    if (response.status === 200) {
      yield put(searchUserSuccess(response.data));
    }
  } catch (error) {
    yield put(searchUserError(error.response.data));
  }
}

// Filter user
function* onFilterUserRequest({ payload: value }) {
  try {
    const response = yield call(filterUserApi, value);

    if (response.status === 200) {
      yield put(filterUserSuccess(response.data));
    }
  } catch (error) {
    yield put(filterUserError(error.response.data));
  }
}

// Sort user
function* onSortUserRequest({ payload: value }) {
  try {
    const response = yield call(sortUserApi, value);

    if (response.status === 200) {
      yield put(sortUserSuccess(response.data));
    }
  } catch (error) {
    yield put(sortUserError(error.response.data));
  }
}

// Listeners
function* onGetUsers() {
  console.log('onGetUsers:', getUsersRequest.type);
  yield takeEvery(getUsersRequest.type, onGetUsersRequest);
}

function* onCreateUser() {
  yield takeLatest(createUserRequest.type, onCreateUserRequest);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(deleteUserRequest.type);
    yield call(onDeleteUserRequest, userId);
  }
}

function* onUpdateUser() {
  yield takeLatest(updateUserRequest.type, onUpdateUserRequest);
}

function* onSearchUser() {
  yield takeLatest(searchUserRequest.type, onSearchUserRequest);
}

function* onFilterUser() {
  yield takeLatest(filterUserRequest.type, onFilterUserRequest);
}

function* onSortUser() {
  yield takeLatest(sortUserRequest.type, onSortUserRequest);
}

export const userSagas = [
  fork(onGetUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
  fork(onSearchUser),
  fork(onFilterUser),
  fork(onSortUser),
];
