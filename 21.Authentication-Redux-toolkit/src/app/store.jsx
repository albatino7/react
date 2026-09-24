import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../features/countSlices.jsx";
import authReducer from "../features/authSlice.jsx";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    auth: authReducer,
  },
});
