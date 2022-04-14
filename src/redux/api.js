import axios from 'axios';

const loadUsersApi = async () => {
  return await axios.get(`http://localhost:5000/users`);
};

export { loadUsersApi };
