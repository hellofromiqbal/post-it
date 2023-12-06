import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const currentUserSlicer = createSlice({
  name: 'currentUserDetails',
  initialState,
  reducers: {
    fetchCurrentUserDetails: (state, action) => {
      state.value = action.payload;
    },
    updateCurrentUserDetails: (state, action) => {
      const currentUser = state.value.find(item => item.username === action.payload.username);
      console.log(currentUser);
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchCurrentUserDetails, updateCurrentUserDetails } = currentUserSlicer.actions;

export default currentUserSlicer.reducer