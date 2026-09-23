import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export const useAuth = () => {
  let navigate = useNavigate();

  const RegisterFormSubmit = (data) => {
    console.log(data);
  };

  const LoginFormSubmit = (data) => {
    console.log(data);
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
