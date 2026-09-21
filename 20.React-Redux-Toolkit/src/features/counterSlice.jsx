import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  reducers: {
    increase: (state, actions) => {
      console.log(actions.payload.name);

      state.count++;
    },
    decrease: (state, actions) => {
      state.count--;
    },
  },
});

console.log(counterSlice);
export const { increase, decrease } = counterSlice.actions;

export default counterSlice.reducer;
