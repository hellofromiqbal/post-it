import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './currentUserSlicer';
import currentPostsReducer from './currentPostsSlicer';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    currentPosts: currentPostsReducer
  },
});