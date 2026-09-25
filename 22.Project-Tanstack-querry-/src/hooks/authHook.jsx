import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/authSlice.jsx";

const useAuthHook = () => {
  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("register")) || [],
  );
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("login")),
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerFormHandle = (data) => {
    console.log(data);

    const arr = [...registerData, data];
    setRegisterData(arr);
    localStorage.setItem("register", JSON.stringify(arr));
    localStorage.setItem("login", JSON.stringify(data));
    dispatch(addUser(data));
    toast.success("userRegister Sucessfully");
    reset();
    navigate("/main");
  };

  const loginFormHandle = (data) => {
    console.log(data);

    const loginUser = registerData.find((elem) => {
      return elem.email === data.email && elem.password === data.password;
    });

    if (loginUser) {
      setLoginData(data);
      localStorage.setItem("login", JSON.stringify(loginUser));
      dispatch(addUser(loginUser));
      toast.success("userLoginSucessFully");
      reset();
      return navigate("/main");
    }
    toast.error("unable to login");
    return navigate("/");
  };

  return {
    register,
    handleSubmit,
    reset,
    errors,
    navigate,
    registerFormHandle,
    loginFormHandle,
  };
};

export default useAuthHook;
