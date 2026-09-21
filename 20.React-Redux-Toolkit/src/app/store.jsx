import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice,
  },
});
