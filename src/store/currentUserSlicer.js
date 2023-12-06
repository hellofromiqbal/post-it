import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
};

export const currentUserSlicer = createSlice({
  name: 'currentUserDetails',
  initialState,
  reducers: {
    fetchCurrentUserDetails: (state, action) => {
      state.value = action.payload;
    },
    updateCurrentUserDetails: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter(item => item.username !== action.payload.username).unshift(action.payload);
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchCurrentUserDetails, updateCurrentUserDetails } = currentUserSlicer.actions;

export default currentUserSlicer.reducer