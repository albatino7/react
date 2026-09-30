import { axisoInstance } from "./axisoInstance";

export const getAllProducts = async (limit, pageData) => {
  try {
    console.log("getllAproduct api is calling..... ");
    const response = await axisoInstance.get(
      `/products?limit=${limit}&skip=${pageData * limit}`,
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
