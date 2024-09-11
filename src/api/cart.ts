/* eslint-disable no-console */
import instance from '@/axios/instance';

export const getBooksFromCart = async () => {
  try {
    const response = await instance.get('cart/');
    console.log('response', response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
