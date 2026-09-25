import axios, { create } from "axios";

export const axiosIntance = axios.create({
  baseURL: "https://dummyjson.com",
});
