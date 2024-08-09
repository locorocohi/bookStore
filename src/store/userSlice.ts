/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { IUserData } from '@/pages/profile';

type UsersStateType = {
  user: IUserData | null;
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
