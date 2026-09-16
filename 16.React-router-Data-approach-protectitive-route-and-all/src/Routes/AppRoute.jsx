import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Auth from "../Layout/Auth";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPages from "../pages/ContactPages";
import MainLayout from "../Layout/MainLayout";
import Final from "../pages/Final";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Final />,
        },
      ],
    },
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "contact",
          element: <ContactPages />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoute;
