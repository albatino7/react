import React from "react";

const Navbar = ({ setToggle }) => {
  const handleCreateUser = () => {
    setToggle(false);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-blue-600">UserApp</h1>

        <button
          onClick={handleCreateUser}
          className="rounded-xl bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
        >
          Create User
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
