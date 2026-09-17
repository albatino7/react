import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyStore";
import { toast } from "react-toastify";

const ProtectedLayout = () => {
  const { loginData, registerData } = useContext(MyStore);

  // Not logged in
  if (!loginData) {
    // toast.error("unable to render");
    return <Navigate to="/" replace />;
  }

  const finduser = registerData.find(
    (elem) =>
      elem.email === loginData.email && elem.password === loginData.password,
  );

  console.log("Logged in user:", finduser);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="ml-64 h-screen overflow-y-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
