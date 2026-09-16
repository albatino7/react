import React, { use, useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router";
import { MyStore } from "../context/MyStore";
import { Home } from "lucide-react";
import { toast } from "react-toastify";

const MainLayout = () => {
  const { loginData, setLoginData, RegisterData, setRegisterData } =
    useContext(MyStore);
  console.log(loginData);
  const user = RegisterData.find(
    (elm) => elm.email == loginData.email && elm.passwor === loginData.password,
  );
  console.log(user);
  if (!loginData) {
    return <Navigate to={"/about"} />;
  }

  return <Outlet />;
};

export default MainLayout;
