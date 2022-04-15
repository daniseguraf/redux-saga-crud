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
import { LOAD_USERS_START, CREATE_USER_START } from './actionsTypes';
import {
  loadUsersSuccess,
  loadUsersError,
  createUserSuccess,
  createUserError,
} from './actions';
import { loadUsersApi, createUserApi } from './api';

// Get users
export function* onLoadUsersStartAsync() {
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
export function* onCreateUserStartAsync(action) {
  try {
    const response = yield call(createUserApi, action.payload);

    if (response.status === 200) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserError(error.response.data));
  }
}

export function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_START, onLoadUsersStartAsync);
}

export function* onCreateUser() {
  yield takeLatest(CREATE_USER_START, onCreateUserStartAsync);
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
