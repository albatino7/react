import React from "react";
import {
  User,
  Mail,
  Lock,
  UserRound,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { useAuthHook } from "../hook/useAuthHook";

const Register = () => {
  const { navigate, register, errors, handleRegister, handleSubmit } =
    useAuthHook();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="w-full md:w-2/5 bg-[#2874f0] text-white p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <ShoppingBag size={32} />
            <h1 className="text-2xl font-bold">ShopKart</h1>
          </div>

          <h2 className="text-3xl font-bold mb-4">Create Your Account</h2>

          <p className="text-blue-100 text-sm md:text-base leading-6">
            Join us today and enjoy a simple, fast and secure shopping
            experience.
          </p>

          <div className="mt-8 space-y-4 text-sm text-blue-50">
            <p>✓ Easy and secure shopping</p>
            <p>✓ Track your orders easily</p>
            <p>✓ Discover amazing products</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10">
          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-gray-800">Register</h2>
            <p className="text-sm text-gray-500 mt-1">
              Create your account to get started
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <div className="relative">
                <UserRound
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("name", {
                    required: "name is required",
                  })}
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("username", {
                    required: "username is required",
                  })}
                  type="text"
                  name="username"
                  placeholder="Choose a username"
                  className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>
              {errors.username && <p>{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
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
                  size={19}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  {...register("password", {
                    required: "password is required",
                  })}
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  className="w-full border border-gray-300 rounded-md py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#2874f0] focus:ring-1 focus:ring-[#2874f0]"
                />
              </div>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#2874f0] hover:bg-[#1f63d1] text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition duration-200"
            >
              Create Account
              <ArrowRight size={19} />
            </button>
          </form>

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-[#2874f0] font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
