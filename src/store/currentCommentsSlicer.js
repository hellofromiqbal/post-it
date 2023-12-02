import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
};

export const currentCommentsSlicer = createSlice({
  name: 'currentComments',
  initialState,
  reducers: {
    fetchCurrentComments: (state, action) => {
      state.value = action.payload;
    },
    createComment: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deleteComment: (state, action) => {
      state.value = state.value.filter(item => item._id !== action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchCurrentComments, createComment, deleteComment } = currentCommentsSlicer.actions;

export default currentCommentsSlicer.reducer