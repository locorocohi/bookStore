/* eslint-disable no-param-reassign */
import type { BookInCartType } from '@/models/bookInCart';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { editCart } from './thunks';

type CartStateType = {
  booksInCart: BookInCartType[];
  total: number;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CartStateType = {
  booksInCart: [],
  total: 0,
  isLoading: true,
  isError: false,
  errorMessage: '',
};

type SetPayloadType = PayloadAction<{booksInCart: BookInCartType[]; total: number}>;

export const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    setBooksInCart: (state, action: SetPayloadType) => {
      state.booksInCart = [...action.payload.booksInCart];
      state.total = action.payload.total;
    },
  },

  extraReducers(builder) {
    builder.addCase(
      editCart.fulfilled,
      (state, action) => {
        state.booksInCart = [...action.payload.updatedBooksInCart];
        state.total = action.payload.total;
      },
    );
  },
});

export const { setBooksInCart } = cartSlice.actions;
export default cartSlice.reducer;
