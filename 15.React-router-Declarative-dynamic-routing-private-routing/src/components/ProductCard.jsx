import React, { useContext } from "react";
import { ShoppingCart, Star, Heart } from "lucide-react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyStore";
import toast from "react-hot-toast";

const ProductCard = ({ product, isInCart }) => {
  const navigate = useNavigate();
  const { cartProduct, setCartItems, increaseQuantity, decreaseQuantity } =
    useContext(MyStore);

  const data = cartProduct.find((elem) => elem.id === product.id);

  const addItemInCart = () => {
    toast.success("🛒 Item added to Cart");
    setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
  };
  const handleIncrease = () => {
    toast.success("📦 Item quantity increased!");
    increaseQuantity(product.id);
  };
  const handleDecease = () => {
    toast.success("📦 Quantity decreased!");
    decreaseQuantity(product.id);
  };
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
        {/* Wishlist */}
        <button className="absolute right-4 top-4 rounded-full border border-gray-200 bg-white p-2 text-gray-600 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
          <Heart size={20} />
        </button>

        <img
          onClick={() => navigate(`/detail/${product.id}`)}
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 h-12 text-lg font-semibold leading-6 text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-yellow-50 px-2 py-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold text-gray-700">
              {product.rating?.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          {/* Price */}
          <div>
            <p className="text-xs text-gray-400">Price</p>

            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          {/* Add To Cart */}
          {isInCart ? (
            <div className="flex w-fit items-center overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm">
              <button
                onClick={() => handleDecease()}
                className="flex h-9 w-10 items-center justify-center text-lg font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 active:scale-95"
              >
                -
              </button>

              <span className="flex h-9 min-w-10 items-center justify-center border-x border-gray-300 px-3 font-semibold text-gray-800">
                {data.quantity}
              </span>

              <button
                onClick={() => handleIncrease()}
                className="flex h-9 w-10 items-center justify-center text-lg font-semibold text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 active:scale-95"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItemInCart()}
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition-all duration-200 hover:bg-blue-700 active:scale-95"
            >
              <ShoppingCart size={19} />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
