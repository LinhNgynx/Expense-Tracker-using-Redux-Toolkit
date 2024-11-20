import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Modify the draft directly
    },
    decrement: (state) => {
      state.value -= 1; // Modify the draft directly
    },
    reset: (state) => {
      state.value = 0; // Modify the draft directly
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload; // Modify the draft directly
    },
  },
});
export const {increment, decrement, reset, incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer;
