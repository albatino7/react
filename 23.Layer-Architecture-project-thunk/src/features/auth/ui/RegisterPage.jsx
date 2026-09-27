import React from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";

import useAuthHook from "../hooks/useAuthHook";

const RegisterPage = () => {
  const { navigate, register, errors, handleSubmit, handleRegisterFrom } =
    useAuthHook();
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-7">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2874f0] mb-4 shadow-md">
            <UserPlus className="text-white" size={26} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>

          <p className="text-gray-500 mt-2 text-sm">
            Create your account and start shopping with us
          </p>
        </div>

        {/* Register Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-7 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
          <form
            onSubmit={handleSubmit(handleRegisterFrom)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("name", {
                    required: "please enter Your Full Name",
                  })}
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="w-full h-12 pl-10 pr-4 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("email", {
                    required: "please enter Your email",
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full h-12 pl-10 pr-4 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
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
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("password", {
                    required: "please enter Your password",
                  })}
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="w-full h-12 pl-10 pr-4 rounded-md bg-white border border-gray-300 text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>

              {errors.name && <p>{errors.password.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full h-12 mt-2 rounded-md bg-[#2874f0] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#1d65d8] transition active:scale-[0.98] shadow-sm"
            >
              <UserPlus size={18} />
              Create Account
            </button>
          </form>

          {/* Login */}
          <div className="border-t border-gray-100 mt-7 pt-5">
            <p className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-[#2874f0] hover:text-[#1d65d8] cursor-pointer font-semibold"
              >
                Login
              </span>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <p className="text-center text-xs text-gray-400 mt-5">
          By creating an account, you agree to our Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
