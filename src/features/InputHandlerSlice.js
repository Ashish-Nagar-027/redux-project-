import { createSlice } from '@reduxjs/toolkit';

export const inputHanlderSlice = createSlice({
  name: "resetInput",
  initialState: {
     value : false, 
     emptyInputs: false,
  },
  
  reducers: {
    resetInputs: (state) => {
       state.value = true
    },
    setDefault: (state) => {
        state.value = false
    },
   setEmptyInputs: (state, action)=> {
    state.emptyInputs = action.payload
   }
  },
});

export const { resetInputs, setDefault,setEmptyInputs } = inputHanlderSlice.actions;


export default inputHanlderSlice.reducer;
