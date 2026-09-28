import { axiosInstance } from "../../../config/axiosInstance";

export const getuserDetail = async (loginDetail) => {
  try {
    const response = await axiosInstance.post("/auth/login", loginDetail);
    localStorage.setItem("accessToken", response.data.accessToken);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("getUserDetail Error Api ", error);
  }
};

export const getUserByAcessToken = async () => {
  const token = localStorage.getItem("accessToken");
  const res = axiosInstance.get("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
    },
  });
  return res;
  //   console.log(res);
};
