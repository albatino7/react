import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const MainProtect = () => {
  const { user } = useSelector((store) => store.auth);

  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default MainProtect;
