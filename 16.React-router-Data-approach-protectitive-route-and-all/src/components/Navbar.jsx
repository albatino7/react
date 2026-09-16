import React from "react";
import { Home, ShoppingCart, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => navigate("/main")}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          MyStore
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/main")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <Home size={19} />
            Home
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Contact
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <ShoppingCart size={19} />
            Cart
          </button>

          <button
            onClick={() => navigate("/about")}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
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
