/* eslint-disable no-console */
import instance from '@/axios/instance';
import type { UserType } from '@/models/user';
import { erroredToast } from '@/toasts/errorToast';
import type { AxiosResponse } from 'axios';
import { setCookie } from 'cookies-next';

export const saveNewUser = async (options: {email: string; password: string}) => {
  try {
    const user = await instance.post('user/create', options);
    const { accessToken, userData } = user.data;
    setCookie('accessToken', accessToken);
    return userData;
  } catch (error) {
    erroredToast(error.message);
  }
};

export const getMe = async () => {
  try {
    const user: AxiosResponse<{findedUser: UserType; booksInCartCount: number}> = await instance.get('user/me');
    return user.data;
  } catch (error) {
    erroredToast(error.message);
  }
};

export const logIn = async (options: {email: string; password: string}) => {
  try {
    const user = await instance.post('user/login', options);
    const { accessToken } = user.data;
    setCookie('accessToken', accessToken);
  } catch (error) {
    erroredToast(error.message);
  }
};

export const saveNewAvatar = async (options: {encodedImage:string; fileType:string; id:number}) => {
  try {
    const user = await instance.patch('user/avatar', options);
    return user.data;
  } catch (error) {
    erroredToast(error.message);
  }
};

export const changeInfo = async (options: { name:string }) => {
  try {
    const user = await instance.patch('user/changeinfo', options);
    return user.data;
  } catch (error) {
    erroredToast(error.message);
  }
};

export const changePassword = async (options: {password: string; secondPassword: string}) => {
  try {
    const user = await instance.patch('user/changepassword', options);
    return user.data;
  } catch (error: unknown) {
    erroredToast(error.message);
  }
};
