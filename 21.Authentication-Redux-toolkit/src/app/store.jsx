import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/countSlices.jsx";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});
