import { createSlice } from '@reduxjs/toolkit';

export const operationsSlice = createSlice({
  name: "operations",
  initialState: 0,
  reducers: {
    increaseOperationValue: (state) => {
      return state + 1;
    },
    resetOperationValue: () => 0,
  },
});

export const { increaseOperationValue, resetOperationValue } = operationsSlice.actions;

export const selectOperations = (state) => state.operations;

export default operationsSlice.reducer;
