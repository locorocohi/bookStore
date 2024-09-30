/* eslint-disable no-console */
import instance from '@/axios/instance';
import type { BookType } from '@/models/book';
import { erroredToast } from '@/toasts/errorToast';
import { isAxiosError, type AxiosResponse } from 'axios';
import type { ParsedUrlQuery } from 'querystring';

export const getBooks = async (query: ParsedUrlQuery) => {
  try {
    const response: AxiosResponse<
    { booksArray: BookType[];
      pageCount: number;
      sortOptions: string[];
      genres: string[];
    }> = await instance.get('book/',
      {
        params: {
          ...query,
        },
      });

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return [];
    }
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

export const addBookToFavorite = async (bookId: number) => {
  try {
    const response = await instance.post('book/favorite', { bookId });
    return response.data;
  } catch (error) {
    erroredToast('Нужно быть авторизованным');
  }
};

export const removeBookFromFavorite = async (bookId: number) => {
  try {
    const response = await instance.post('book/favorite/remove', { bookId });
    return response.data;
  } catch (error) {
    erroredToast('Нужно быть авторизованным');
  }
};
