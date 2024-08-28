/* eslint-disable no-console */
import instance from '@/axios/instance';

export const getBooks = async () => {
  try {
    const response = await instance.get('book/',
      {
        params: {
          order_by: 'asc',
          test: 'test',
        },
      });
    const { booksArray, genres, sortOptions } = response.data;
    return { booksArray, genres, sortOptions };
  } catch (error) {
    console.log(error);
  }
};
