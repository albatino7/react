import React from "react";
import { Mail, Lock, LogIn } from "lucide-react";
import useAuthHook from "../hooks/authHook";

const LoginPage = () => {
  const { register, handleSubmit, errors, navigate, loginFormHandle } =
    useAuthHook();
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-green-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <LogIn className="w-7 h-7 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>

          <p className="text-gray-500 mt-2 text-sm">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(loginFormHandle)} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />

              <input
                {...register("email", {
                  required: "email is required",
                })}
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
              />
            </div>
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />

              <input
                {...register("password", {
                  required: "password is required",
                })}
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition"
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-green-600 font-semibold cursor-pointer hover:text-green-700"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
