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

    if (response.status === 200) {
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

const userSagas = [fork(onLoadUsers), fork(onCreateUser), fork(onDeleteUser)];

export default function* rootSaga() {
  yield all([...userSagas]);
}
