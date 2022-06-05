import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loading: false,
  error: null,
  // pageLimit: 4,
  // currentPage: 0,
  // paginationMode: true,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
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

    createUser: () => {},
    deleteUser: () => {},
    updateUser: () => {},
  },
});

console.log(usersSlice);

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  createUser,
  deleteUser,
  updateUser,
} = usersSlice.actions;

export default usersSlice.reducer;
