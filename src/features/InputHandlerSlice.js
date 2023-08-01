import { createSlice } from '@reduxjs/toolkit';

export const inputHanlderSlice = createSlice({
  name: "resetInput",
  initialState: {
     value : false
  },
  reducers: {
    resetInputs: (state) => {
       state.value = true
    },
    setDefault: (state) => {
        state.value = false
    },
  },
});

export const { resetInputs, setDefault } = inputHanlderSlice.actions;


export default inputHanlderSlice.reducer;
