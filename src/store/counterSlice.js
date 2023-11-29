import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchUserData: (state, action) => {
      state.value = action.payload.email;
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchUserData } = counterSlice.actions;

export default counterSlice.reducer