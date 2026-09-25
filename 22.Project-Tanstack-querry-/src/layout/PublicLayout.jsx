import React from "react";
import { Outlet } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
