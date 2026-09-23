import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import RegisterPage from "../pages/RegisterPage";
import PublicRoutes from "../layout/PublicRoutes";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../layout/ProtectedRoute";
import Home from "../pages/Home";
const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoutes />,
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
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
