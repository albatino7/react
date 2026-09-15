import React, { useState } from "react";
import { Navigate } from "react-router";
import toast from "react-hot-toast";

const ProtectedRoutes = ({ children }) => {
  const isAdmin = false;

  if (!isAdmin) {
    console.log("You cannot this Routes");
    toast.error("You need Admin permissions");
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoutes;
