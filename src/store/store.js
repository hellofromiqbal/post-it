import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './currentUserSlicer';
import currentPostsReducer from './currentPostsSlicer';
import currentCommentsReducer from './currentCommentsSlicer';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    currentPosts: currentPostsReducer,
    currentComments: currentCommentsReducer
  },
});