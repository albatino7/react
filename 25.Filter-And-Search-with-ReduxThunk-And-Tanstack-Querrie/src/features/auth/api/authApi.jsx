import { createAsyncThunk } from "@reduxjs/toolkit";
import { axisoInstance } from "../../../config/axiosInstance";
export const getLoginApi = createAsyncThunk(
  "auth/login",
  async (credential, thunkApi) => {
    try {
      const response = await axisoInstance.post("auth/login", credential);

      console.log("getloginApi -----> ", response);
      localStorage.setItem("accessToken", response.data.accessToken);
      return response.data;
    } catch (error) {
      //this line is import to reject promise
      console.log("err from getLoginApi ", error);
      return thunkApi.rejectWithValue("cred is wrong");
    }
  },
);

export const getLoginWithAccessToken = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axisoInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue("Unable to login ");
    }
  },
);
