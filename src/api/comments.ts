/* eslint-disable no-console */
import instance from '@/axios/instance';

export const createComment = async (options: {text: string; bookId: number}) => {
  try {
    const response = await instance.post('comment/create', options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
