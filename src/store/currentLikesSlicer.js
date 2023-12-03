import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const currentLikesSlicer = createSlice({
  name: 'currentLikes',
  initialState,
  reducers: {
    fetchCurrentLikes: (state, action) => {
      state.value = action.payload;
    },
    createLike: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    // deleteComment: (state, action) => {
    //   state.value = state.value.filter(item => item.authorId !== action.payload);
    // }
  }
});

export const { fetchCurrentLikes, createLike } = currentLikesSlicer.actions;

export default currentLikesSlicer.reducer