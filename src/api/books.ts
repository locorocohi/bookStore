/* eslint-disable no-console */
import instance from '@/axios/instance';
import type { BookType } from '@/models/book';

export const getBooks = async () => {
  try {
    const req = await instance.get('book/');
    const books: BookType [] = req.data;
    return books;
  } catch (error) {
    console.log(error);
  }
};
