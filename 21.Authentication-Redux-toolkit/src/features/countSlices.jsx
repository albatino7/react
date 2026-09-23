import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    increaseCount: (state, actions) => {
      state.count++;
    },
    decreaseCount: (state, action) => {
      state.count--;
    },
    increaseByValue: (state, action) => {
      state.count += Number(action.payload);
    },
  },
});

export const { increaseCount, decreaseCount, increaseByValue } =
  counterSlice.actions;

export default counterSlice.reducer;
