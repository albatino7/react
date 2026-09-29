import { createSlice } from "@reduxjs/toolkit";
import { getLoginApi, getLoginWithAccessToken } from "../api/authApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: true,
    isAuthenticated: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    },

    removeUser: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getLoginApi.pending, (state, action) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(getLoginApi.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(getLoginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(getLoginWithAccessToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getLoginWithAccessToken.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(getLoginWithAccessToken.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
