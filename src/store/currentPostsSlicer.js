import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
};

export const currentPostsSlicer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    saveCurrentPosts: (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
    },
    updateCurrentPosts: (state, action) => {
      state.value = state.value.unshift(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveCurrentPosts, updateCurrentPosts } = currentPostsSlicer.actions;

export default currentPostsSlicer.reducer