import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const PublicRoutes = () => {
  console.log("this public route");
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PublicRoutes;
