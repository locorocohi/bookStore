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
  },
  // extraReducers: (builder) => {

  // },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
