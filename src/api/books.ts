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

    const { booksArray, genres, sortOptions, pageCount } = response.data;
    return { booksArray, genres, sortOptions, pageCount };
  } catch (error) {
    console.log(error);
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await instance.get(`book/product/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateRating = async (options: {rating: number; bookId: number}) => {
  try {
    const response = await instance.patch(`book/product/${options.bookId}`, { rating: options.rating });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
