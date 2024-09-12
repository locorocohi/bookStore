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
