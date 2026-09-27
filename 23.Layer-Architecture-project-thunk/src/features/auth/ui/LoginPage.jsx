import React from "react";
import { User, Lock, LogIn } from "lucide-react";
import useAuthHook from "../hooks/useAuthHook";

const LoginPage = () => {
  const { register, handleLoginFrom, errors, handleSubmit } = useAuthHook();

  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2874f0] mb-4 shadow-md">
            <LogIn className="text-white" size={26} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>

          <p className="text-gray-500 mt-2 text-sm">
            Login to continue to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-7 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <form onSubmit={handleSubmit(handleLoginFrom)} className="space-y-5">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("username", {
                    required: "Please enter your username",
                  })}
                  type="text"
                  placeholder="Enter your username"
                  className="w-full h-12 pl-10 pr-4 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>

              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>

                <span className="text-xs font-medium text-[#2874f0] hover:text-[#1d65d8] cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("password", {
                    required: "Please enter your password",
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="w-full h-12 pl-10 pr-4 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>

              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full h-12 mt-2 rounded-md bg-[#2874f0] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#1d65d8] transition active:scale-[0.98] shadow-sm"
            >
              <LogIn size={18} />
              Login
            </button>
          </form>

          {/* Register */}
          <div className="border-t border-gray-100 mt-7 pt-5">
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <span className="text-[#2874f0] hover:text-[#1d65d8] cursor-pointer font-semibold">
                Create Account
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-xs text-gray-400 mt-5">
          Secure login to your account
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
