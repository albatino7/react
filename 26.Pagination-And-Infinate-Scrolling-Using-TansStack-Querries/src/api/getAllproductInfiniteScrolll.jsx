import { axisoInstance } from "./axisoInstance";
export const infinteScroll = async (limit, pageParam) => {
  try {
    // console.log(limit);
    // console.log(pageParam);
    const response = await axisoInstance.get(
      `/products?limit=${limit}&skip=${pageParam}`,
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
