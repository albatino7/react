import { axisoInstance } from "../../../config/axiosInstance";

export const getAllProduct = async (category) => {
  try {
    const url = category ? `products/category/${category}` : "/products";
    // console.log(url);
    const response = await axisoInstance.get(url);
    // console.log("getAll product --->>>>>-------", response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProductCategoryList = async () => {
  try {
    const response = await axisoInstance.get("products/categories");
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSeacrhProductApi = async (searchData) => {
  try {
    const url = searchData ? `/products/search?q=${searchData}` : "/products";
    // console.log("search ulr ==>", url);
    const response = await axisoInstance.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
