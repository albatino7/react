import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicProtect = () => {
  const { user } = useSelector((store) => store.auth);
  console.log(user);
  if (user) {
    return <Navigate to={"/main"} />;
  }

  return <Outlet />;
};

export default PublicProtect;
