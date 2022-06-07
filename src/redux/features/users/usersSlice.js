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

    // DELETE USER
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.users = state.users.filter((el) => el.id !== action.payload);
    },
    deleteUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // UPDATE USER
    updateUserRequest: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state) => {
      state.loading = false;
    },
    updateUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // SEARCH USER
    searchUserRequest: (state) => {
      state.loading = true;
    },
    searchUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    searchUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // FILTER USER
    filterUserRequest: (state) => {
      state.loading = true;
    },
    filterUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    filterUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // SORT USER
    sortUserRequest: (state) => {
      state.loading = true;
    },
    sortUserSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    sortUserError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// console.log(usersSlice);

export const {
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
} = usersSlice.actions;

export default usersSlice.reducer;
