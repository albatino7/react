import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { LogOut } from "lucide-react";
import { toast } from "react-toastify";
import { MyStore } from "../context/MyStore";

const Navbar = () => {
  const navigate = useNavigate();

  const { setLoginData } = useContext(MyStore);

  const handleLogout = () => {
    localStorage.removeItem("loginUser");

    setLoginData(null);

    toast.success("Logout Successfully");

    navigate("/");
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-8">My App</h1>

      <div className="flex flex-col gap-3">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition ${
              isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-700"
            }`
          }
          end
        >
          Home
        </NavLink>

        <NavLink
          to="/main/product"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition ${
              isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-700"
            }`
          }
        >
          Product
        </NavLink>

        <NavLink
          to="/main/user"
          className={({ isActive }) =>
            `px-4 py-3 rounded-lg transition ${
              isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-700"
            }`
          }
        >
          User
        </NavLink>
      </div>

      {/* Logout at bottom */}
      <button
        onClick={handleLogout}
        className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  );
};

export default Navbar;
