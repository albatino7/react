import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import RegisterPages from "../pages/RegisterPages";
import LoginPage from "../pages/LoginPage";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import { toast } from "react-toastify";

const AppRoute = () => {
  const dispatch = useDispatch();
  const hydarateUser = () => {
    const locaStorage = JSON.parse(localStorage.getItem("login"));

    if (!locaStorage) {
      return toast.error("loginUser not Found");
    }
    toast.success("Redux Updated");
    dispatch(addUser(locaStorage));
  };
  useEffect(() => {
    hydarateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <PublicLayout />,
          children: [
            {
              path: "",
              element: <RegisterPages />,
            },
            {
              path: "login",
              element: <LoginPage />,
            },
          ],
        },
      ],
    },

    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
