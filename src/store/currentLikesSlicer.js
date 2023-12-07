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
    deleteLike: (state, action) => {
      state.value = state.value.filter(item => item.authorId !== action.payload);
    },
    updateLike: (state, action) => {
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

export const { fetchCurrentLikes, createLike, deleteLike } = currentLikesSlicer.actions;

export default currentLikesSlicer.reducer