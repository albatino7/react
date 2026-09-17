import React, { useContext } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { MyStore } from "../context/MyStore";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerData, setRegisterData, loginData, setLoginData } =
    useContext(MyStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const arr = [...registerData, data];
    setRegisterData(arr);
    setLoginData(data);
    localStorage.setItem("loginUser", JSON.stringify(arr));
    localStorage.setItem("registerUser", JSON.stringify(arr));
    console.log("Register Data:", data);
    toast.success("User is Registered now");
    navigate("/main");
    reset();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-indigo-100 flex items-center justify-center">
            <UserPlus className="w-7 h-7 text-indigo-600" />
          </div>

          <h1 className="text-3xl font-bold text-slate-800">Create Account</h1>

          <p className="text-slate-500 mt-2">Register a new account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

              <input
                {...register("email", {
                  required: "Email is Required",
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

              <input
                {...register("password", {
                  required: "Password is Required",
                })}
                type="password"
                placeholder="Enter your password"
                className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition shadow-md"
          >
            <UserPlus className="w-5 h-5" />
            Register
          </button>
        </form>

        {/* Bottom Text */}
        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-indigo-600 font-semibold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
