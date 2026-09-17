import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { MyStore } from "../context/MyStore.jsx";

const PublicLayout = () => {
  const { loginData } = useContext(MyStore);

  // User is already logged in
  if (loginData) {
    return <Navigate to="/main" replace />;
  }

  return <Outlet />;
};

export default PublicLayout;
