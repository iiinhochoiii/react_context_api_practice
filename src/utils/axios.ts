import Axios from 'axios';

const baseURL = 'http://localhost:4000/';

const axiosInstance = Axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
