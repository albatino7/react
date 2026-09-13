import React, { useContext } from "react";
import { MyCurdStore } from "../context/MyCurdContext";

const Cards = ({ product }) => {
  const {
    setUpdatedData,
    toggleData,
    setToggleData,
    productData,
    setProductData,
  } = useContext(MyCurdStore);

  const handleUpdate = () => {
    setUpdatedData(product);
    console.log(product);
    setToggleData((prev) => !prev);
  };

  const handleDelete = () => {
    setProductData((prev) =>
      prev.filter((user) => {
        return user.id !== product.id;
      }),
    );
  };
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-lg transition duration-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>

      <p className="text-gray-600 mb-3">{product.email}</p>

      <p className="text-xs text-gray-400 break-all mb-5">ID: {product.id}</p>

      <div className="flex gap-3">
        <button
          onClick={() => handleUpdate()}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium
                 hover:bg-blue-700 transition"
        >
          Update
        </button>

        <button
          onClick={() => handleDelete()}
          className="flex-1 bg-red-500 text-white py-2 rounded-lg font-medium
                 hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cards;
