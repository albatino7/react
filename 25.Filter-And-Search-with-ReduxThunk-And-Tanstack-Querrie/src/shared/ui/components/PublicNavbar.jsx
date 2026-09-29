import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { NavLink } from "react-router";

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#2874f0] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <ShoppingBag size={28} strokeWidth={2.5} />

            <div className="leading-tight">
              <h1 className="text-xl sm:text-2xl font-bold">ShopKart</h1>

              <p className="hidden sm:block text-[10px] text-blue-100">
                Your Shopping Partner
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-5 py-2 rounded-md text-sm font-semibold transition ${
                  isActive ? "bg-white text-[#2874f0]" : "hover:bg-blue-600"
                }`
              }
            >
              Register
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-5 py-2 rounded-md text-sm font-semibold transition ${
                  isActive ? "bg-white text-[#2874f0]" : "hover:bg-blue-600"
                }`
              }
            >
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-blue-600 transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-400 py-3">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-semibold ${
                    isActive ? "bg-white text-[#2874f0]" : "hover:bg-blue-600"
                  }`
                }
              >
                Register
              </NavLink>

              <NavLink
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-sm font-semibold ${
                    isActive ? "bg-white text-[#2874f0]" : "hover:bg-blue-600"
                  }`
                }
              >
                Login
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavbar;
