import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },

  reducers: {
    addUser: (state, actions) => {
      state.user = actions.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    },

    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
