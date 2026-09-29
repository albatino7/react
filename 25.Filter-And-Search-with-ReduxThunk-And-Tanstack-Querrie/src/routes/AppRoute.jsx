import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import Register from "../features/auth/ui/Register";
import Login from "../features/auth/ui/Login";
import MainLayout from "../layout/MainLayout";
import Homepage from "../shared/ui/pages/Homepage";
import ProductPage from "../features/product/ui/pages/ProductPage";
import AboutPage from "../shared/ui/pages/AboutPage";
import { useDispatch } from "react-redux";
import { getLoginWithAccessToken } from "../features/auth/api/authApi";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import CartPage from "../features/cart/ui/CartPage";
const AppRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      try {
        console.log("hydartion is running ");
        dispatch(getLoginWithAccessToken());
      } catch (error) {
        console.log("erro in hydartion ", error);
      }
    })();
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
              element: <Register />,
            },

            {
              path: "login",
              element: <Login />,
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
              element: <Homepage />,
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
