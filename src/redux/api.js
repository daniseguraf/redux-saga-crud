import axios from 'axios';

// export const getUsersApi = async ({ start, end }) => {
//   return await axios.get(
//     `http://localhost:5000/users?_start=${start}&_end=${end}`
//   );
// };
export const getUsersApi = async () => {
  return await axios.get(`http://localhost:5000/users`);
};

export const createUserApi = async (user) => {
  return await axios.post(`http://localhost:5000/users`, user);
};

export const deleteUserApi = async (userId) => {
  return await axios.delete(`http://localhost:5000/users/${userId}`);
};

export const updateUserApi = async (userInfo) => {
  return await axios.put(
    `http://localhost:5000/users/${userInfo.id}`,
    userInfo
  );
};

export const searchUserApi = async (query) => {
  return await axios.get(`http://localhost:5000/users?q=${query}`);
};

export const filterUserApi = async (value) => {
  return await axios.get(`http://localhost:5000/users?status=${value}`);
};

export const sortUserApi = async (value) => {
  return await axios.get(
    `http://localhost:5000/users?_sort=${value}&_order=asc`
  );
};
