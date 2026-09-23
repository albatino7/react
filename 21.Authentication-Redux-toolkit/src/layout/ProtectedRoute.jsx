import React from "react";
import { Outlet } from "react-router";

const ProtectedRoute = () => {
  return <Outlet />;
};

export default ProtectedRoute;
