import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from 'redux-saga/effects';
import {
  LOAD_USERS_REQUEST,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  SEARCH_USER_REQUEST,
  FILTER_USER_REQUEST,
} from './actionsTypes';
import {
  loadUsersSuccess,
  loadUsersError,
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
} from './actions';
import {
  loadUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
  searchUserApi,
  filterUserApi,
} from './api';

// Get users
function* onLoadUsersRequest() {
  try {
    const response = yield call(loadUsersApi);

    if (response.status === 200) {
      yield delay(500);
      yield put(loadUsersSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUsersError(error.response.data));
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

// Listeners
function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_REQUEST, onLoadUsersRequest);
}

function* onCreateUser() {
  yield takeLatest(CREATE_USER_REQUEST, onCreateUserRequest);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(DELETE_USER_REQUEST);
    yield call(onDeleteUserRequest, userId);
  }
}

function* onUpdateUser() {
  yield takeLatest(UPDATE_USER_REQUEST, onUpdateUserRequest);
}

function* onSearchUser() {
  yield takeLatest(SEARCH_USER_REQUEST, onSearchUserRequest);
}

function* onFilterUser() {
  yield takeLatest(FILTER_USER_REQUEST, onFilterUserRequest);
}

const userSagas = [
  fork(onLoadUsers),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onUpdateUser),
  fork(onSearchUser),
  fork(onFilterUser),
];

export default function* rootSaga() {
  yield all([...userSagas]);
}
