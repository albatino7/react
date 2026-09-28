import { createSlice } from "@reduxjs/toolkit";
import { hydration, loginAction } from "./authAction";

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

  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(hydration.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(hydration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(hydration.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
