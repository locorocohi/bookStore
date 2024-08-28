/* eslint-disable no-console */
import instance from '@/axios/instance';

export const getBooks = async () => {
  try {
    const req = await instance.get('book/');
    const { booksArray, genres, sortOptions } = req.data;
    return { booksArray, genres, sortOptions };
  } catch (error) {
    console.log(error);
  }
};
