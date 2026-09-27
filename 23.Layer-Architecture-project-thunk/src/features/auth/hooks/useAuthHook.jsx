import React from "react";

import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { getuserDetail } from "../api/authApi";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../state/authSlice";

const useAuthHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleLoginFrom = async (data) => {
    const res = await getuserDetail(data);
    // console.log(data);
    console.log(res);

    dispatch(addUser(res));
  };
  const handleRegisterFrom = (data) => {
    console.log(data);
  };

  return {
    navigate,
    handleSubmit,
    register,
    reset,
    errors,
    handleLoginFrom,
    handleRegisterFrom,
  };
};

export default useAuthHook;
