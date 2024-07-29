import axios from 'axios';
import { config } from '../../config';

const instance = axios.create({
  baseURL: `http://${config.HOST}:${config.PORT}/api/`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const createUserDb = async (options: {email: string; password: string}) => {
  const user = await instance.post('user/create', options);
  return user;
};

export { createUserDb };
