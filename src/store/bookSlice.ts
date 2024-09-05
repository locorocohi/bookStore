/* eslint-disable no-param-reassign */
import type { BookType } from '@/models/book';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getFilteredBooks, setBookRating } from './thunks';

type BooksStateType = {
  books: BookType[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: BooksStateType = {
  books: [],
  isLoading: true,
  isError: false,
  errorMessage: '',
};

export const booksSlice = createSlice({
  name: 'books',

  initialState,

  reducers: {
    setBooks: (state, action: PayloadAction<BookType[]>) => {
      state.books = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(
      getFilteredBooks.fulfilled,
      (state, action) => {
        state.books = action.payload;
      },
    );
    builder.addCase(getFilteredBooks.pending, () => {
      return initialState;
    });
    builder.addCase(
      getFilteredBooks.rejected,
      (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.books = [];
        state.errorMessage = action.payload?.errorMessage ?? '';
      },
    );

    builder.addCase(setBookRating.fulfilled,
      (state, action) => {
        const findedBookIdx = state.books.findIndex((book) => book.id === action.payload.id);
        state.books[findedBookIdx] = action.payload;
      });
    // builder.addCase();
    // builder.addCase();
  },
});

export const { setBooks } = booksSlice.actions;
export default booksSlice.reducer;
