import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3336',
  baseURL: 'http://localhost:8093',
});

export default api;
