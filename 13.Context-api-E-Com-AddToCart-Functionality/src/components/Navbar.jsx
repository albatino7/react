import React, { useContext } from "react";
import { MyStore } from "../context/MyEcom";

const Navbar = () => {
  const { setToggleData } = useContext(MyStore);
  return (
    <nav className="flex justify-between px-5 py-3 bg-gray-800 text-white">
      <h2>MyStore</h2>

      <div className="flex gap-5">
        <span onClick={() => setToggleData(true)}>Home</span>
        <span onClick={() => setToggleData(false)}>Cart</span>
      </div>
    </nav>
  );
};

export default Navbar;
