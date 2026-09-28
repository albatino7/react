import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosInstance";
import { toast } from "react-toastify";

export const loginAction = createAsyncThunk(
  "action/login",
  async (credential, thunkApi) => {
    try {
      const response = await axiosInstance.post("/auth/login", credential);
      localStorage.setItem("accessToken", response.data.accessToken);
      console.log(response.data);
      toast.success("Login SuccesFull");
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error("invalid creadential");
      return thunkApi.rejectWithValue("error from loginAction ");
    }
  },
);

export const hydration = createAsyncThunk(
  "login/hydration",
  async (_, thunkApi) => {
    try {
      console.log("hydration is runnig ");
      const token = localStorage.getItem("accessToken");
      const res = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
      });
      //   console.log(res);
      return res.data;
    } catch (error) {
      toast.error("invalid cred by hydration");
      console.log("error from hydration ", error);
      return thunkApi.rejectWithValue("error from hydration ");
    }
  },
);
