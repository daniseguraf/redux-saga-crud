import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // GET USERS
    getUsersRequest: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload.users;
    },
    getUsersError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // CREATE USER
    createUserRequest: (state) => {
      state.loading = true;
    },
    createUserSuccess: (state) => {
      state.loading = false;
    },
    createUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteUser: () => {},
    updateUser: () => {},
  },
});

console.log(usersSlice);

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  createUserRequest,
  createUserSuccess,
  createUserError,
  createUser,
  deleteUser,
  updateUser,
} = usersSlice.actions;

export default usersSlice.reducer;
