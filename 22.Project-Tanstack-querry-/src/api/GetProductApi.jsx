import { axiosIntance } from "../config/axisoInstance";

export const getAllProducts = async () => {
  const response = await axiosIntance.get("/products");
  console.log("getAllProduct Data is Calling :-----", response);
  return response.data.products;
};
