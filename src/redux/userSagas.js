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
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from './actionsTypes';
import { loadUsersSuccess, loadUsersError } from './actions';
import { loadUsersApi } from './api';

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

export function* onLoadUsers() {
  yield takeEvery(LOAD_USERS_START, onLoadUsersStartAsync);
}

const userSagas = [fork(onLoadUsers)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
