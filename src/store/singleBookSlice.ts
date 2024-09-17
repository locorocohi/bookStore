/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommentType } from '@/models/comment';
import type { BookType } from '@/models/book';
import { getUpdatedComments } from './thunks';

type SingleBookStateType = {
  book: BookType | null;
  comments: CommentType[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: SingleBookStateType = {
  book: null,
  comments: [],
  isLoading: true,
  isError: false,
  errorMessage: '',
};

export const singleBookSlice = createSlice({
  name: 'singleBook',

  initialState,

  reducers: {
    setSingleBook: (state, action:PayloadAction<BookType>) => {
      state.book = action.payload;
    },
    setComments: (state, action: PayloadAction<CommentType[]>) => {
      state.comments = action.payload;
    },
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getUpdatedComments.fulfilled,
      (state, action) => {
        state.comments = action.payload;
      },
    );
    builder.addCase(getUpdatedComments.pending, () => {
      return initialState;
    });
    builder.addCase(
      getUpdatedComments.rejected,
      (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.book = null;
        state.comments = [];
        state.errorMessage = action.payload?.errorMessage ?? '';
      },
    );
  },
});

export const { setComments, addComment, setSingleBook } = singleBookSlice.actions;
export default singleBookSlice.reducer;
