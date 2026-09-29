import React from "react";
import {
  ShoppingBag,
  Home,
  Package,
  Info,
  ShoppingCart,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Navigate, NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../features/auth/state/authSlice";

const MainNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    toast.success("Logout Sucessfull");
    navigate("/");
  };
  const navLinkClass = ({ isActive }) =>
    `group relative flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
      isActive
        ? "text-[#2874f0] bg-blue-50"
        : "text-gray-700 hover:text-[#2874f0] hover:bg-blue-50"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP NAVBAR ================= */}
        <div className="h-16 flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <NavLink
            to="/main"
            className="flex items-center gap-2 shrink-0 group"
          >
            <div className="bg-[#2874f0] text-white p-2 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
              <ShoppingBag size={23} strokeWidth={2.5} />
            </div>

            <div className="leading-tight">
              <h1 className="text-xl sm:text-2xl font-bold text-[#2874f0] tracking-tight">
                ShopKart
              </h1>

              <p className="hidden sm:block text-[9px] text-gray-400">
                Your Shopping Partner
              </p>
            </div>
          </NavLink>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/main" className={navLinkClass}>
              <Home
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span>Home</span>
            </NavLink>

            <NavLink to="/main/product" className={navLinkClass}>
              <Package
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span>Products</span>
            </NavLink>

            <NavLink to="/main/about" className={navLinkClass}>
              <Info
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              <span>About</span>
            </NavLink>

            <NavLink to="/main/cart" className={navLinkClass}>
              <div className="relative">
                <ShoppingCart
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                <span className="absolute -top-2 -right-2 min-w-4 h-4 px-1 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center">
                  0
                </span>
              </div>

              <span>Cart</span>
            </NavLink>

            {/* UI Only Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="group flex items-center gap-2 px-4 py-2 ml-2 rounded-md text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-300"
            >
              <LogOut
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

              <span>Logout</span>
            </button>
          </div>

          {/* ================= MOBILE MENU ICON ================= */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-[#2874f0] transition-all duration-300"
          >
            <Menu size={25} />
          </button>
        </div>

        {/* ================= MOBILE MENU UI ================= */}
        <div className="hidden md:hidden border-t border-gray-100 py-4">
          <div className="flex flex-col gap-1">
            <NavLink to="/main" className={navLinkClass}>
              <Home size={19} />
              <span>Home</span>
            </NavLink>

            <NavLink to="/main/product" className={navLinkClass}>
              <Package size={19} />
              <span>Products</span>
            </NavLink>

            <NavLink to="/main/about" className={navLinkClass}>
              <Info size={19} />
              <span>About</span>
            </NavLink>

            <NavLink to="/main/cart" className={navLinkClass}>
              <ShoppingCart size={19} />
              <span>Cart</span>

              <span className="ml-auto bg-red-500 text-white text-[10px] min-w-5 h-5 px-1 rounded-full flex items-center justify-center">
                0
              </span>
            </NavLink>

            <button
              type="button"
              onClick={handleLogout}
              className="group w-full flex items-center gap-3 px-3 py-3 mt-2 rounded-md text-red-500 hover:bg-red-50 transition-all duration-300"
            >
              <LogOut size={19} />

              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
