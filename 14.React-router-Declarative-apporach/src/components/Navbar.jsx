import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-slate-950 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <p className="text-2xl font-bold tracking-wide text-blue-400">
            Fluppy
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:bg-slate-800 hover:text-white transition duration-200"
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:bg-slate-800 hover:text-white transition duration-200"
            to={"/about"}
          >
            About
          </NavLink>

          <NavLink
            className="px-4 py-2 rounded-lg text-gray-300 font-medium hover:bg-slate-800 hover:text-white transition duration-200"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
