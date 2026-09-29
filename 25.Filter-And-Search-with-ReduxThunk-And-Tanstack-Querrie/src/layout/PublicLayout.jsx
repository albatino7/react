import React from "react";
import { Outlet } from "react-router";
import PublicNavbar from "../shared/ui/components/PublicNavbar";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
