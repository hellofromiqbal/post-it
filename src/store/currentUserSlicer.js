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
    updatedCurrentUserDetails: (state, action) => {
      state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchCurrentUserDetails, updatedCurrentUserDetails } = currentUserSlicer.actions;

export default currentUserSlicer.reducer