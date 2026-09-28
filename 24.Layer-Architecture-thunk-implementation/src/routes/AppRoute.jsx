import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import PublicLayout from "../Layout/PublicLayout.jsx";
import RegisterPage from "../features/auth/ui/RegisterPage.jsx";
import LoginPage from "../features/auth/ui/LoginPage.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import HomePage from "../shared/HomePage.jsx";
import ProductPage from "../features/products/ui/ProductPage.jsx";
import CartPage from "../features/cart/ui/CartPage.jsx";
import AboutPage from "../shared/AboutPage.jsx";
import { getUserByAcessToken } from "../features/auth/api/authApi.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../features/auth/state/authSlice.jsx";
import PublicProtected from "./protected/PublicProtected.jsx";
import MainProtected from "./protected/MainProtected.jsx";
import { hydration } from "../features/auth/state/authAction.jsx";

const AppRoute = () => {
  const dispatch = useDispatch();
  const hydaration = async () => {
    try {
      dispatch(hydration());
    } catch (error) {
      console.log("hydration fn error", error);
    }
  };

  useEffect(() => {
    hydaration();
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
              element: <RegisterPage />,
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
              path: "cart",
              element: <CartPage />,
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
