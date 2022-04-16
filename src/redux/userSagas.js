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
  LOAD_USERS_START,
  CREATE_USER_START,
  DELETE_USER_START,
} from './actionsTypes';
import {
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
  deleteUserSuccess,
  deleteUserError,
} from './actions';
import { loadUsersApi, createUserApi, deleteUserApi } from './api';

// Get users
function* onLoadUsersStartAsync() {
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

// Create new user
function* onCreateUserStartAsync(action) {
  try {
    const response = yield call(createUserApi, action.payload);

    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

// Delete user
function* onDeleteUserStartAsync(id) {
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

function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUser() {
  yield takeLatest(CREATE_USER_START, onCreateUserStartAsync);
}

function* onDeleteUser() {
  while (true) {
    const { payload: userId } = yield take(DELETE_USER_START);
    yield call(onDeleteUserStartAsync, userId);
  }
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
