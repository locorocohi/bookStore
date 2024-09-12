import { getBookById, getBooks, updateRating } from '@/api/books';
import type { CommentType } from '@/models/comment';
import type { BookType } from '@/models/book';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ParsedUrlQuery } from 'querystring';
import type { BookInCartType } from '@/models/bookInCart';
import { editBookInCart } from '@/api/cart';

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

export const setBookRating = createAsyncThunk<
  number,
  {rating: number; bookId: number},
  {
    rejectValue: {
      errorMessage: string;
    };
  }
>('books/setBookRating', async (params, thunkAPI) => {
  try {
    const data = await updateRating(params);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ errorMessage: 'ERROR' });
  }
});

export const getUpdatedComments = createAsyncThunk<
  CommentType[],
  string,
  {
    rejectValue: {
      errorMessage: string;
    };
  }
  >('comments/getUpdatedComments', async (params, thunkAPI) => {
    try {
      const data = await getBookById(params);
      return data?.findedComments;
    } catch (error) {
      return thunkAPI.rejectWithValue({ errorMessage: 'ERROR' });
    }
  });

export const editCart = createAsyncThunk<
  {updatedBooksInCart: BookInCartType[]; total: number},
  {bookId: number; count: number},
  {
    rejectValue: {
      errorMessage: string;
    };
  }
>('cart/editCart', async (params, thunkAPI) => {
  try {
    const data = await editBookInCart(params);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ errorMessage: 'ERROR' });
  }
});
