import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";
import Loading from "../../shared/ui/components/Loading";

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
