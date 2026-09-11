import React from "react";

const Cards = ({ elem }) => {
  return (
    <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="h-48 w-full bg-gray-100">
        <img
          src={elem.image}
          alt={elem.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-800">{elem.name}</h3>

        <p className="mb-4 break-words text-sm text-gray-500">{elem.email}</p>

        <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Cards;
