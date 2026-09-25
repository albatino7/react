import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";
const MainProtected = () => {
  const { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default MainProtected;
