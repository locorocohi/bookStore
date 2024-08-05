import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '@/models/user';

type UsersStateType = {
  users: UserType[];
};

const initialState: UsersStateType = { users: [] };

export const userSlice = createSlice({
  name: 'users',

  initialState,

  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  // extraReducers: (builder) => {

  // },
});

export const { createUser } = userSlice.actions;
export default userSlice.reducer;
