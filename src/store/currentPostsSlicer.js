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
      const filteredStateValue = state.value.filter(item => item.authorId !== action.payload.authorId);
      const currentUser = state.value.find(item => item.authorId === action.payload.authorId);
      const updatedUser = {
        ...currentUser,
        authorFullname: action.payload.authorFullname,
        authorUsername: action.payload.authorUsername
      };
      state.value = [updatedUser, ...filteredStateValue];
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchCurrentPosts, createPost, deletePost, updatePost } = currentPostsSlicer.actions;

export default currentPostsSlicer.reducer