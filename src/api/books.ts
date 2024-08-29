/* eslint-disable no-console */
import instance from '@/axios/instance';
import type { ParsedUrlQuery } from 'querystring';

export const getBooks = async (query: ParsedUrlQuery) => {
  try {
    const response = await instance.get('book/',
      {
        params: {
          ...query,
        },
      });
    const { booksArray, genres, sortOptions } = response.data;
    return { booksArray, genres, sortOptions };
  } catch (error) {
    console.log(error);
  }
};
