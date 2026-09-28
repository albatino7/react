import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loading from "../../shared/components/Loading";

const MainProtected = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default MainProtected;
