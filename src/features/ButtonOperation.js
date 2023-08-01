import {  createSlice } from '@reduxjs/toolkit';


export const ButtonSlice = createSlice({
    name: "button",
    initialState: {
        button: '+'
    },
    reducers: {
        setButton: (state, action) => 
        {
          state.button = action.payload
        },
    }
})

// this is for dispatch
export const { setButton } = ButtonSlice.actions;


// this is for selecting or subscribing
export const selectButton = (state) => state.button.button;


// this is for configureStore
export default ButtonSlice.reducer;