import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    value: 0,
    showResult: false
  },
  reducers: {
    setResult: (state, action) => {
      state.value = action.payload;
    },
    showResult: (state) => {
      state.showResult = true
    },
    hideResult: (state) => {
      state.showResult = false
    }
  },
});

export const { setResult, showResult, hideResult } = resultSlice.actions;



export default resultSlice.reducer;
