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
  // getUsersSuccess,
  // getUsersError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
  updateUserSuccess,
  updateUserError,
  searchUserSuccess,
  searchUserError,
  filterUserSuccess,
  filterUserError,
  sortUserSuccess,
  sortUserError,
} from './actions';
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
  yield takeLatest(types.CREATE_USER_REQUEST, onCreateUserRequest);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(types.DELETE_USER_REQUEST);
    yield call(onDeleteUserRequest, userId);
  }
}

function* onUpdateUser() {
  yield takeLatest(types.UPDATE_USER_REQUEST, onUpdateUserRequest);
}

function* onSearchUser() {
  yield takeLatest(types.SEARCH_USER_REQUEST, onSearchUserRequest);
}

function* onFilterUser() {
  yield takeLatest(types.FILTER_USER_REQUEST, onFilterUserRequest);
}

function* onSortUser() {
  yield takeLatest(types.SORT_USER_REQUEST, onSortUserRequest);
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
