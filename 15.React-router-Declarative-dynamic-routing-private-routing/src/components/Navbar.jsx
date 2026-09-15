import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Dynamic <span className="text-blue-400">Routing</span>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
