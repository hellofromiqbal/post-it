import { configureStore } from '@reduxjs/toolkit';
import currentUserReducer from './currentUserSlicer';
import currentPostsReducer from './currentPostsSlicer';
import currentCommentsReducer from './currentCommentsSlicer';
import currentLikesReducer from './currentLikesSlicer';

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    currentPosts: currentPostsReducer,
    currentComments: currentCommentsReducer,
    currentLikes: currentLikesReducer
  },
});