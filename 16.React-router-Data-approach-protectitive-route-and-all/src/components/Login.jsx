import React, { useContext } from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {
  const { loginData, setLoginData, RegisterData, setRegisterData } =
    useContext(MyStore);
  const navigate = useNavigate();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const formHandle = (data) => {
    const user = RegisterData.find(
      (elem) => elem.email === data.email && elem.password === data.password,
    );
    console.log(user);
    if (user) {
      setLoginData(user);
      localStorage.setItem("loginUser", JSON.stringify(user));
      toast.success("user LogIn sucessFully");
      navigate("/main");
      reset();
    } else {
      toast.error("unable to login ");
      navigate("/about");
      reset();
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
            <LogIn size={28} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formHandle)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                {...register("email", {
                  required: "Eamil is Required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                {...register("password", {
                  required: "password is Required",
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <span className="text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            <LogIn size={20} />
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
