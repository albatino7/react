import React from "react";

const Cards = ({ data, setHandleUpdate, setToggle, setUserData }) => {
  const handleUpdate = () => {
    setHandleUpdate(data);
    setToggle((prev) => !prev);
  };
  const handleDelete = () => {
    setUserData((prev) => prev.filter((user) => user.id != data.id));
    if ((setUserData = {})) {
      setToggle((prev) => !prev);
    }
  };

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Profile Image */}
      <div className="flex justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
        <img
          width={90}
          height={90}
          src={data.image}
          alt=""
          className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>

      {/* User Information */}
      <div className="px-6 py-5 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-800">{data.name}</h3>

        <p className="mb-2 truncate text-sm text-gray-500">{data.email}</p>

        <p className="text-sm font-medium text-gray-600">{data.number}</p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => handleUpdate()}
            className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Update
          </button>

          <button
            onClick={() => handleDelete()}
            className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
