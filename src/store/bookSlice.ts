/* eslint-disable no-param-reassign */
import type { BookType } from '@/models/book';
import { createSlice } from '@reduxjs/toolkit';

type BooksStateType = {
  books: BookType [] | [];
};

const initialState: BooksStateType = { books: [] };

export const booksSlice = createSlice({
  name: 'books',

  initialState,

  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
  },
  // extraReducers: (builder) => {

  // },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
