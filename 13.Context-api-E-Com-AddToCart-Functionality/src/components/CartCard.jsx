import React, { useContext } from "react";
import { MyStore } from "../context/MyEcom";
const CartCard = ({ product }) => {
  const { increaseCartItem, decreaseCartItem, removeCartItem } =
    useContext(MyStore);
  const handleincrease = () => {
    increaseCartItem(product.id);
  };

  const handleDecrease = () => {
    decreaseCartItem(product.id);
  };

  const handleDelete = () => {
    removeCartItem(product.id);
  };
  return (
    <div className="flex w-full max-w-2xl items-center gap-5 rounded-lg border p-4 shadow-sm">
      {" "}
      {/* Product Image */}{" "}
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-24 object-contain"
      />{" "}
      {/* Product Details */}{" "}
      <div className="flex-1">
        {" "}
        <p className="text-sm text-gray-500"> {product.category} </p>{" "}
        <h2 className="font-semibold"> {product.title.substring(0, 30)}... </h2>{" "}
        <p className="mt-1 font-bold"> ${product.price} </p> {product.quantity}{" "}
        <div className="mt-3 flex items-center gap-3">
          {" "}
          <button
            onClick={() => handleDecrease()}
            className="h-8 w-8 rounded border text-lg"
          >
            {" "}
            -{" "}
          </button>{" "}
          <span className="font-semibold">{product.quantity}</span>{" "}
          <button
            onClick={() => handleincrease()}
            className="h-8 w-8 rounded border text-lg"
          >
            {" "}
            +{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Remove Button */}{" "}
      <button
        onClick={() => handleDelete()}
        className="rounded bg-red-500 px-3 py-2 text-sm text-white hover:bg-red-600"
      >
        {" "}
        Remove{" "}
      </button>{" "}
    </div>
  );
};
export default CartCard;
