import instance from '@/axios/instance';
import { erroredToast } from '@/toasts/errorToast';

export const getBooksFromCart = async () => {
  try {
    const response = await instance.get('cart/');
    return response.data;
  } catch (error) {
    erroredToast(error.message);
  }
};

export const addBookInCart = async (options: {bookId: number}) => {
  try {
    const response = await instance.post('cart/add', options);
    return response.data;
  } catch (error) {
    erroredToast(error.message);
  }
};

export const editBookInCart = async (options: {bookId: number; count: number}) => {
  try {
    const response = await instance.patch('cart/edit', options);
    return response.data;
  } catch (error) {
    erroredToast(error.message);
  }
};
