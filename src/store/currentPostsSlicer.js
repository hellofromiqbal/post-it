import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
};

export const currentPostsSlicer = createSlice({
  name: 'currentPosts',
  initialState,
  reducers: {
    fetchCurrentPosts: (state, action) => {
      state.value = action.payload;
    },
    createPost: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deletePost: (state, action) => {
      state.value = state.value.filter(item => item._id !== action.payload);
    },
    updatePost: (state, action) => {
      const newState = state.value.map(item => {
        if(item.authorId === action.payload._id) {
          return {
            ...item,
            authorFullname: action.payload.fullname,
            authorUsername: action.payload.username
          }
        } else {
          return item;
        };
      });
      state.value = newState;
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchCurrentPosts, createPost, deletePost, updatePost } = currentPostsSlicer.actions;

export default currentPostsSlicer.reducer