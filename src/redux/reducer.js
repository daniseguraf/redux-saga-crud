import {
  LOAD_USERS_START,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from './actionsTypes';

const initialState = {
  users: [],
  loading: false,
  error: null,
};
const usersReducer = (state = initialState, action) => {
  if (action.type === LOAD_USERS_START) {
    return { ...state, loading: true };
  }
  if (action.type === LOAD_USERS_SUCCESS) {
    return { ...state, loading: false, users: action.payload };
  }
  if (action.type === LOAD_USERS_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
};

export default usersReducer;
