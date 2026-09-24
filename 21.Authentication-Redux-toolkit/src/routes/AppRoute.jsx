import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import RegisterPage from "../pages/RegisterPage";
import PublicRoutes from "../layout/PublicRoutes";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../layout/ProtectedRoute";
import Home from "../pages/Home";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice";
import PublicProtect from "./protected/PublicProtect";
import MainProtect from "./protected/MainProtect";
const AppRoute = () => {
  const dispatch = useDispatch();

  const hydrateUser = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("login"));

    if (!loggedInUser) {
      toast.error("login user Not Found");
      return;
    }
    toast.success("REDUX updated Sucessfully");
    dispatch(addUser(loggedInUser));
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtect />,
      children: [
        {
          path: "",
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
      ],
    },
    {
      path: "/main",
      element: <MainProtect />,
      children: [
        {
          path: "",
          element: <ProtectedRoute />,
          children: [
            {
              path: "",
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
