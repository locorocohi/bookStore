import { createSlice } from '@reduxjs/toolkit';
import type { UserType } from '@/models/user';

const initialState: UserType[] = [];

export const userSlice = createSlice({
  name: 'Users',

  initialState,

  reducers: {

  },
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
