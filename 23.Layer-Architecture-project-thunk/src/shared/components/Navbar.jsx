import React from "react";
import {
  ShoppingBag,
  Home,
  Package,
  ShoppingCart,
  Info,
  Search,
  Menu,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { removeUser } from "../../features/auth/state/authSlice";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout USer");
    dispatch(removeUser());
    localStorage.removeItem("accessToken");
    toast.success("Logout SuccessfUlly");
  };
  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "text-[#2874f0] bg-blue-50"
        : "text-gray-600 hover:text-[#2874f0] hover:bg-blue-50"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <NavLink
            to="/main"
            className="flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2874f0] flex items-center justify-center shadow-sm">
              <ShoppingBag className="text-white" size={22} />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900 leading-none">
                Shop<span className="text-[#2874f0]">Ease</span>
              </h1>

              <p className="text-[10px] text-gray-400 mt-1">Smart Shopping</p>
            </div>
          </NavLink>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-10 pl-11 pr-4 rounded-md bg-[#f5f7fa] border border-transparent text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:bg-white focus:border-[#2874f0] transition"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/main" end className={navLinkStyle}>
              <Home size={18} />
              Home
            </NavLink>

            <NavLink to="/main/product" className={navLinkStyle}>
              <Package size={18} />
              Products
            </NavLink>

            <NavLink
              to="/main/cart"
              className={({ isActive }) =>
                `${navLinkStyle({ isActive })} relative`
              }
            >
              <ShoppingCart size={18} />
              Cart
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#2874f0] text-white text-[9px] flex items-center justify-center">
                2
              </span>
            </NavLink>

            <NavLink to="/main/about" className={navLinkStyle}>
              <Info size={18} />
              About
            </NavLink>
          </div>

          {/* Logout */}
          <button
            onClick={() => handleLogout()}
            type="button"
            className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition"
          >
            <LogOut size={18} />
            Logout
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            className="lg:hidden w-10 h-10 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
          >
            <Menu size={23} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
          <NavLink to="/main" end className={navLinkStyle}>
            <Home size={18} />
            Home
          </NavLink>

          <NavLink to="/main/product" className={navLinkStyle}>
            <Package size={18} />
            Products
          </NavLink>

          <NavLink to="/main/cart" className={navLinkStyle}>
            <ShoppingCart size={18} />
            Cart
          </NavLink>

          <NavLink to="/main/about" className={navLinkStyle}>
            <Info size={18} />
            About
          </NavLink>

          {/* Mobile Logout */}
          <button
            type="button"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-red-50 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
