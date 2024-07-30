import axios from 'axios';
import { getCookie } from 'cookies-next';
import { config } from '../../config';

const instance = axios.create({
  baseURL: `http://${config.HOST}:${config.PORT}/api/`,
  timeout: 1000,
});

instance.interceptors.request.use((req) => {
  const token = getCookie('accessToken');
  if (!token) {
    return req;
  }

  // eslint-disable-next-line no-param-reassign
  req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default instance;
