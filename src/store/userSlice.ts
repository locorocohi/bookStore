/* eslint-disable no-param-reassign */
import type { UserType } from '@/models/user';
import { createSlice } from '@reduxjs/toolkit';

type UsersStateType = {
  user: UserType | null;
};

const initialState: UsersStateType = { user: null };

export const userSlice = createSlice({
  name: 'user',

  initialState,

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeFavoriteBook: (state, action) => {
      if (state.user) {
        const filteredArr = state.user.favorites.filter((book) => book.id !== action.payload);
        state.user.favorites = filteredArr;
      }
    },
  },
});

export const { setUser, removeFavoriteBook } = userSlice.actions;
export default userSlice.reducer;
