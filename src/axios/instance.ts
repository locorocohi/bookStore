import axios from 'axios';
import { getCookie } from 'cookies-next';
import { config } from '../../config';

let token: string | undefined;

export const setToken = (_token?: string) => {
  token = _token;
};

const instance = axios.create({
  baseURL: `http://${config.HOST}:${config.PORT}/api/`,
  timeout: 1000,
});

instance.interceptors.request.use((req) => {
  const currentToken = token ?? getCookie('accessToken');

  if (!currentToken) {
    return req;
  }

  // eslint-disable-next-line no-param-reassign
  req.headers.Authorization = `Bearer ${currentToken}`;
  return req;
});

export default instance;
