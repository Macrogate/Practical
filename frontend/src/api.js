import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => axios.create({
  baseURL: BASE_URL,
  headers: { token: token },
});
