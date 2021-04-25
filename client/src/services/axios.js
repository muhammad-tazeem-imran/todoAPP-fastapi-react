import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.HOST,
  setTimeout: 3000,
});

export default axiosInstance;
