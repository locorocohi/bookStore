import { getBooks } from '@/api/books';
import type { BookType } from '@/models/book';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ParsedUrlQuery } from 'querystring';

export const getFilteredBooks = createAsyncThunk<
  BookType[],
  ParsedUrlQuery,
  {
    rejectValue: {
      errorMessage: string;
    };
  }
>('books/getFilteredBooks', async (params, thunkAPI) => {
  try {
    const data = await getBooks(params);
    return data?.booksArray;
  } catch (err) {
    return thunkAPI.rejectWithValue({ errorMessage: 'ERROR' });
  }
});
