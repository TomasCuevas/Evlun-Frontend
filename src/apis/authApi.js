import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables';

const { API_AUTH_URL } = getEnvVariables();

const authApi = axios.create({
  baseURL: API_AUTH_URL,
});

authApi.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token'),
  };
});

export default authApi;
