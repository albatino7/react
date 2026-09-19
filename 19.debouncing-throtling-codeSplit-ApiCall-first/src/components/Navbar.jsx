import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-20 justify-between px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-tight text-slate-900"
        >
          My<span className="text-blue-600">Store</span>
        </NavLink>

        {/* Navigation */}
        <div className="flex items-center gap-10 rounded-xl bg-slate-100 p-1">
          <NavLink
            to="/"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-blue-600 hover:shadow-sm"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-blue-600 hover:shadow-sm"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-blue-600 hover:shadow-sm"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
