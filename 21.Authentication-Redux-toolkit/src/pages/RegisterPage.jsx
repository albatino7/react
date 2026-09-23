import React from "react";
import { User, Mail, Lock, UserPlus, ArrowRight } from "lucide-react";
import { useAuth } from "../hooks/useAuth.jsx";

const Register = () => {
  const { navigate } = useAuth();
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <UserPlus size={28} />
          </div>

          <h1 className="text-3xl font-bold text-white">Create Account</h1>

          <p className="mt-2 text-sm text-slate-400">
            Create your account and get started today
          </p>
        </div>

        {/* Register Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/70 py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
            >
              Create Account
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>

          {/* Bottom Text */}
          <div className="mt-6 border-t border-slate-800 pt-5 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?
              <button
                onClick={() => navigate("/login")}
                className="ml-1 font-medium text-blue-400 hover:text-blue-300"
              >
                Login
              </button>
            </p>
          </div>
        </div>

        {/* Small Footer */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Your information is securely stored.
        </p>
      </div>
    </div>
  );
};

export default Register;
