import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Auth = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Auth;
