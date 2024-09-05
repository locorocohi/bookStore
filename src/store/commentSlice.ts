/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CommentType } from '@/components/Comments/Comment/Comment';
import { getUpdatedComments } from './thunks';

type CommentsStateType = {
  comments: CommentType[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CommentsStateType = {
  comments: [],
  isLoading: true,
  isError: false,
  errorMessage: '',
};

export const commentSlice = createSlice({
  name: 'comments',

  initialState,

  reducers: {
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
        state.comments = [];
        state.errorMessage = action.payload?.errorMessage ?? '';
      },
    );
  },
});

export const { setComments, addComment } = commentSlice.actions;
export default commentSlice.reducer;
