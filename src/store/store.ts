import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import bookReducer from './bookSlice';
import commentReducer from './commentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    comment: commentReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
