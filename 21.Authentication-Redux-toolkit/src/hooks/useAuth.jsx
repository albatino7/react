import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/authSlice.jsx";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("register")) || [],
  );
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("login")) || null,
  );

  let navigate = useNavigate();

  const RegisterFormSubmit = (data) => {
    console.log(data);
    const arr = [...registerData, data];
    setRegisterData(arr);
    dispatch(addUser(data));

    localStorage.setItem("register", JSON.stringify(arr));
    localStorage.setItem("login", JSON.stringify(data));

    navigate("/main");
    reset();
    toast.success("User Register SucessfUlly");
  };

  const LoginFormSubmit = (data) => {
    console.log(data);

    const result = registerData.find((val) => {
      return val.email == data.email && val.password === data.password;
    });

    if (!result) {
      toast.error("Unable to Login ");
      navigate("/");
      return;
    }
    setLoginData(data);

    dispatch(addUser(result));
    localStorage.setItem("login", JSON.stringify(data));

    reset();
    toast.success("sucessfully Login");
    navigate("/main");
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return {
    register,
    handleSubmit,
    reset,
    errors,
    navigate,
    RegisterFormSubmit,
    LoginFormSubmit,
  };
};
