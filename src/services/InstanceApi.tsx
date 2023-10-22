import axios, { AxiosInstance } from 'axios';

const apiBaseUrl = 'http://localhost:37742/api/v1';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;