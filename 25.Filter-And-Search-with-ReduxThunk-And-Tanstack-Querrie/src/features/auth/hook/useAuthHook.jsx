import { data, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { getLoginApi } from "../api/authApi";

import { useDispatch } from "react-redux";
export const useAuthHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    // console.log(data);
  };
  const handleLogin = (data) => {
    console.log(data);

    dispatch(getLoginApi(data));
  };

  return {
    navigate,
    handleSubmit,
    register,
    reset,
    errors,
    handleRegister,
    handleLogin,
  };
};
