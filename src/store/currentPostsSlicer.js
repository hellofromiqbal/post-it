import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
};

export const currentPostsSlicer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    saveCurrentPosts: (state, action) => {
      state.value = action.payload;
    },
    createPost: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deletePost: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter(item => item._id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveCurrentPosts, createPost, deletePost } = currentPostsSlicer.actions;

export default currentPostsSlicer.reducer