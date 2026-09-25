import React from "react";
import { NavLink } from "react-router";
import { Home, Package, Info, LogOut } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeUser } from "../features/authSlice.jsx";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const Navbar = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    toast.success("user Logout");
    navigate("/");
  };
  return (
    <nav className="w-full bg-white border-b border-green-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-green-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>

          <h1 className="text-xl font-bold text-gray-800">MyApp</h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/main"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
              }`
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
              }`
            }
          >
            <Package size={18} />
            Product
          </NavLink>

          <NavLink
            to="/main/about"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
              }`
            }
          >
            <Info size={18} />
            About
          </NavLink>

          <button
            onClick={() => handleLogout()}
            type="button"
            className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition"
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
