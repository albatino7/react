import React from "react";
import { NavLink } from "react-router";
import { ShoppingBag, LogIn, UserPlus } from "lucide-react";

const PublicNavbar = () => {
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-[#2874f0] text-white shadow-sm"
        : "text-gray-600 hover:text-[#2874f0] hover:bg-blue-50"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2874f0] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <ShoppingBag size={22} className="text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-none">
                Shop<span className="text-[#2874f0]">Ease</span>
              </h1>

              <p className="text-[10px] text-gray-400 mt-1 tracking-wide">
                SMART SHOPPING
              </p>
            </div>
          </NavLink>

          {/* Right Navigation */}
          <div className="flex items-center gap-2">
            <NavLink to="/login" className={navLinkStyle}>
              <LogIn size={17} />
              <span className="hidden sm:inline">Login</span>
            </NavLink>

            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                  isActive
                    ? "border-[#2874f0] text-[#2874f0] bg-blue-50"
                    : "border-gray-200 text-gray-600 hover:border-[#2874f0] hover:text-[#2874f0] hover:bg-blue-50"
                }`
              }
            >
              <UserPlus size={17} />
              <span className="hidden sm:inline">Register</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PublicNavbar;
