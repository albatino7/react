import axios from "axios";

export const getAllProducts = async () => {
  console.log("Api wala fun phale chala");
  const res = await axios.get("https://fakestoreapi.com/products");

  console.log(res.data);
  return res.data;
};

export const getAlluser = async () => {
  console.log("Api wala fun phale chala get all users");
  const res = await axios.get("https://fakestoreapi.com/users");

  console.log(res.data);
  return res.data;
};
