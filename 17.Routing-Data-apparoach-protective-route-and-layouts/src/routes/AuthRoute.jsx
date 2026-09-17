import { createBrowserRouter, RouterProvider } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";

import React from "react";
import ProtectedLayout from "../layout/ProtectedLayout";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import UserPage from "../pages/UserPage";

const AuthRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          path: "",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedLayout />,
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
          path: "user",
          element: <UserPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AuthRoute;
