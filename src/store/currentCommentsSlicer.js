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
    },
    updateComment: (state, action) => {
      const newState = state.value.map(item => {
        if(item.authorId === action.payload._id) {
          return {
            ...item,
            authorFullname: action.payload.fullname
          };
        } else {
          return item;
        };
      });
      state.value = newState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { fetchCurrentComments, createComment, deleteComment, updateComment } = currentCommentsSlicer.actions;

export default currentCommentsSlicer.reducer