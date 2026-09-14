import React, { useContext } from "react";
import { MyStore } from "../context/MyEcom";

const ProductCard = ({ product, isInCart }) => {
  const { setCartItems, cartItem, increaseCartItem, decreaseCartItem } =
    useContext(MyStore);
  let currentitem = cartItem.find((elem) => elem.id === product.id);

  const handleincrease = () => {
    increaseCartItem(product.id);
  };

  const handleDecrease = () => {
    decreaseCartItem(product.id);
  };

  return (
    <div className="w-64 rounded-lg border p-4 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain"
      />

      <p className="mt-3 text-sm text-gray-500">{product.category}</p>

      <h2 className="mt-1 font-semibold">
        {product.title.substring(0, 25)}...
      </h2>

      <p className="mt-2 text-lg font-bold">${product.price}</p>

      <p className="text-sm text-gray-500">
        ⭐ {product.rating.rate} ({product.rating.count})
      </p>

      {isInCart ? (
        <span className="mt-4 flex w-fit  items-center overflow-hidden rounded-lg border border-gray-300 shadow-sm">
          <span
            onClick={() => handleDecrease()}
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-xl font-semibold transition hover:bg-gray-100"
          >
            -
          </span>

          {/* <p className="flex h-9 min-w-12 items-center justify-center border-x border-gray-300 px-3 font-semibold">
            isInCart = {isInCart.quantity}
          </p> */}

          <p className="flex h-9 items-center justify-center px-3 text-sm text-gray-500">
            {currentitem.quantity}
          </p>

          <span
            onClick={() => handleincrease()}
            className="flex h-9 w-9 cursor-pointer items-center justify-center text-xl font-semibold transition hover:bg-gray-100"
          >
            +
          </span>
        </span>
      ) : (
        <button
          onClick={() =>
            setCartItems((prev) => [...prev, { ...product, quantity: 1 }])
          }
          className="mt-4 w-full rounded bg-black py-2 text-white hover:bg-gray-800"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
