import type { AxiosRequestHeaders, HeadersDefaults } from 'axios';
import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = 'http://localhost:8000/';

type headers = {
  'Content-Type': string;
  Accept: string;
  Authorization: string;
};

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as headers & AxiosRequestHeaders & HeadersDefaults;

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
