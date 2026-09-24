import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenicated: false,
  },

  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenicated = true;
    },

    removeUSer: (state, action) => {
      state.user = null;
      state.isAuthenicated = false;
    },
  },
});

export const { addUser, removeUSer } = authSlice.actions;

export default authSlice.reducer;
