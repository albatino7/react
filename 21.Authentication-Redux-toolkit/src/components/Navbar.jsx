import React from "react";
import { ShieldCheck, LogIn, UserPlus } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Authify
            </h1>

            <p className="hidden text-[11px] text-slate-500 sm:block">
              Simple & Secure
            </p>
          </div>
        </NavLink>

        {/* Auth Links */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <UserPlus size={17} />
            <span>Register</span>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <LogIn size={17} />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
