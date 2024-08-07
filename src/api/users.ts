/* eslint-disable no-console */
import instance from '@/axios/instance';
import { setCookie } from 'cookies-next';

export const saveNewUser = async (options: {email: string; password: string}) => {
  try {
    const user = await instance.post('user/create', options);
    const { accessToken, userData } = user.data;
    setCookie('accessToken', accessToken);
    return userData;
  } catch (error) {
    console.log(error);
  }
};

export const getMe = async () => {
  try {
    const user = await instance.get('user/me');
    return user.data;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (options: {email: string; password: string}) => {
  try {
    const user = await instance.post('user/login', options);
    const { accessToken } = user.data;
    setCookie('accessToken', accessToken);
  } catch (error) {
    console.log(error);
  }
};

export const saveNewAvatar = async (options: {image: string; id: number}) => {
  try {
    const user = await instance.patch('user/avatar', options);
    console.log(user.data);
  } catch (error) {
    console.log(error);
  }
};
