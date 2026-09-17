import axios from "axios";
export const axisoInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axisoInstance.interceptors.response.use(
  (response) => {
    // console.log("interceptor message :::----- ", response);
    return response;
  },
  (err) => {
    console.log("This erro from interceptor", err);
  },
);

axisoInstance.interceptors.request.use(
  (res) => {
    console.log("Request interceptor::::------", res);
    return res;
  },
  (err) => {
    console.log("error from unterceptor", err);
  },
);
