import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const currentUserSlicer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveCurrentUserDetails: (state, action) => {
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveCurrentUserDetails } = currentUserSlicer.actions;

export default currentUserSlicer.reducer