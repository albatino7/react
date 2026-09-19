import React, { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from "../pages/HomePage.jsx";
import { getAllProducts, getAlluser } from "../api/ApiFun.jsx";
import Loading from "../components/Loading.jsx";
// import AboutPages from "../pages/AboutPages.jsx";
// import ContactPages from "../pages/ContactPages.jsx";

let AboutPages = lazy(() => import("../pages/AboutPages.jsx"));
let ContactPages = lazy(() => import("../pages/ContactPages.jsx"));

const AuthRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "about",
          loader: async () => {
            const data = await getAllProducts();
            const data2 = await getAlluser();

            return {
              getAllProducts: data,
              getAlluser: data2,
            };
          }, //api run first before comp render
          hydrateFallbackElement: <Loading />, // laoding while api res comes
          element: (
            <Suspense fallback={<Loading />}>
              <AboutPages />
            </Suspense>
          ),
        },

        {
          path: "contact",
          element: (
            <Suspense fallback={<Loading />}>
              <ContactPages />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AuthRoute;
