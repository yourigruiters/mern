import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
