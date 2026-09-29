import React from "react";
import { Outlet } from "react-router";
import MainNavbar from "../shared/ui/components/MainNavbar";
const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
