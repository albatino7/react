import React from "react";
import { NavLink, Link } from "react-router";
import { Sparkles, LogIn, UserPlus } from "lucide-react";

const PublicNavbar = () => {
  return (
    <nav className="w-full bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800 leading-none">
              MyApp
            </h1>
            <p className="text-[11px] text-green-600 mt-1">Simple & Secure</p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
              }`
            }
          >
            <UserPlus size={17} />
            Register
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition ${
                isActive
                  ? "bg-green-500 text-white"
                  : "bg-green-50 text-green-700 hover:bg-green-500 hover:text-white"
              }`
            }
          >
            <LogIn size={17} />
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
