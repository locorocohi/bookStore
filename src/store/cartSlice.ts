/* eslint-disable no-param-reassign */
import type { BookInCartType } from '@/models/bookInCart';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { editCart } from './thunks';

type CartStateType = {
  booksInCart: BookInCartType[];
  count: number;
  total: number;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const initialState: CartStateType = {
  booksInCart: [],
  count: 0,
  total: 0,
  isLoading: true,
  isError: false,
  errorMessage: '',
};

type SetPayloadType = PayloadAction<{booksInCart: BookInCartType[]; total: number}>;
type RemovePayloadType = PayloadAction<number>;

export const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    setBooksInCart: (state, action: SetPayloadType) => {
      state.booksInCart = action.payload.booksInCart;
      state.total = action.payload.total;
    },
    addBookInLocalCart: (state) => {
      state.count += 1;
    },
    removeBookFromCart: (state, action: RemovePayloadType) => {
      const bookId = action.payload;
      state.booksInCart = state.booksInCart.filter((elem) => elem.book.id !== bookId);
    },
    setBooksCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },

  extraReducers(builder) {
    builder.addCase(
      editCart.fulfilled,
      (state, action) => {
        state.booksInCart = action.payload.updatedBooksInCart;
        state.total = action.payload.total;
      },
    );
  },
});

export const {
  setBooksInCart,
  removeBookFromCart,
  setBooksCount,
  addBookInLocalCart } = cartSlice.actions;
export default cartSlice.reducer;
