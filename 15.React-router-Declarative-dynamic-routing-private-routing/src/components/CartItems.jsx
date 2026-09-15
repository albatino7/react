import React, { useContext } from "react";
import { MyStore } from "../context/MyStore";
import { Minus, Plus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

const CartItems = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeItem } =
    useContext(MyStore);
  const handleDelete = () => {
    toast("🗑️ Product removed");
    removeItem(item.id);
  };
  const handleIncrease = () => {
    toast.success("📦 Item quantity increased!");
    increaseQuantity(item.id);
  };
  const handleDecease = () => {
    toast.success("📦 Quantity decreased!");

    decreaseQuantity(item.id);
  };
  return (
    <div className="mx-auto w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        {/* Product Image */}
        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-gray-50 p-4 sm:h-28 sm:w-28">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="min-w-0 flex-1">
          {/* Category */}
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-600">
            {item.category}
          </p>

          {/* Title */}
          <h2 className="line-clamp-2 text-base font-semibold text-gray-800 sm:text-lg">
            {item.title}
          </h2>

          {/* Price */}
          <p className="mt-2 text-xl font-bold text-gray-900">${item.price}</p>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between gap-4 sm:flex-col">
          <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50">
            <button
              onClick={() => handleDecease()}
              className="flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
            >
              <Minus size={17} />
            </button>

            <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-200 bg-white px-3 font-semibold text-gray-800">
              {item.quantity}
            </span>

            <button
              onClick={() => handleIncrease()}
              className="flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
            >
              <Plus size={17} />
            </button>
          </div>

          {/* Delete */}
          <button
            onClick={() => handleDelete()}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      {/* Total */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm text-gray-500">Item Total</span>

        <span className="text-lg font-bold text-gray-900">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
