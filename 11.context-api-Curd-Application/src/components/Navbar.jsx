import React, { useContext } from "react";
import { MyCurdStore } from "../context/MyCurdContext";

const Navbar = () => {
  const { toggleData, setToggleData } = useContext(MyCurdStore);
  const handlCreateUser = () => {
    setToggleData((prev) => !prev);
  };
  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">
            My<span className="text-blue-600">CRUD</span>
          </h1>

          {/* Create Button */}
          <button
            onClick={() => handlCreateUser()}
            className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg
                   hover:bg-blue-700 transition duration-200
                   shadow-sm hover:shadow-md"
          >
            + Create User
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
