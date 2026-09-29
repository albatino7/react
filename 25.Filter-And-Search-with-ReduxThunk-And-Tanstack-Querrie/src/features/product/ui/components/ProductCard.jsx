import React from "react";
import { ShoppingCart, Heart, Star, Package, Truck } from "lucide-react";

const ProductCard = ({ product }) => {
  const {
    title,
    brand,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    availabilityStatus,
    shippingInformation,
  } = product;

  const originalPrice = (price / (1 - discountPercentage / 100)).toFixed(2);

  return (
    <div className="group w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-50">
        {/* Discount Badge */}
        <div className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-md">
          {discountPercentage}% OFF
        </div>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:text-red-500"
        >
          <Heart size={18} />
        </button>

        {/* Product Image */}
        <div className="flex h-full w-full items-center justify-center p-6">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
          />
        </div>

        {/* Stock Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-600 shadow-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          {availabilityStatus}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-4 sm:p-5">
        {/* Brand + Category */}
        <div className="mb-2 flex items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2874f0]">
            {brand}
          </span>

          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium capitalize text-gray-500">
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-gray-800 transition-colors duration-300 group-hover:text-[#2874f0] sm:text-lg">
          {title}
        </h2>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-xs font-bold text-white">
            <span>{rating}</span>
            <Star size={12} fill="currentColor" />
          </div>

          <span className="text-xs text-gray-500">Customer Rating</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-end gap-2">
          <span className="text-2xl font-extrabold text-gray-900">
            ${price}
          </span>

          <span className="pb-1 text-sm text-gray-400 line-through">
            ${originalPrice}
          </span>

          <span className="pb-1 text-xs font-bold text-green-600">
            Save {discountPercentage}%
          </span>
        </div>

        {/* Extra Information */}
        <div className="mt-4 grid grid-cols-2 gap-2 border-y border-gray-100 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Package size={15} className="text-[#2874f0]" />
            <span>{stock} left</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Truck size={15} className="text-[#2874f0]" />
            <span className="truncate">{shippingInformation}</span>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2874f0] px-4 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
        >
          <ShoppingCart
            size={18}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
