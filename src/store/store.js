import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './currentUserSlicer';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});