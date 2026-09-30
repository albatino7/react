import React from "react";
import { Heart, Star, ShoppingCart, Truck, Zap } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-[300px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50 p-5">
        {/* Discount */}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          {Math.round(product.discountPercentage)}% OFF
        </span>

        {/* Wishlist */}
        <button className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:text-red-500">
          <Heart size={18} />
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-56 w-full object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Brand + Rating */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
            {product.brand || product.category}
          </span>

          <div className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
            <Star size={12} fill="currentColor" />
            {product.rating}
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-2 line-clamp-2 min-h-[48px] text-base font-bold text-gray-900 transition group-hover:text-[#2874f0]">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Price */}
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-2xl font-black text-gray-900">
              ${product.price}
            </span>

            <span className="ml-2 text-xs text-gray-400 line-through">
              $
              {(product.price / (1 - product.discountPercentage / 100)).toFixed(
                0,
              )}
            </span>
          </div>

          <span className="text-xs font-semibold text-green-600">
            {product.stock} left
          </span>
        </div>

        {/* Shipping */}
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
          <Truck size={15} className="text-[#2874f0]" />
          {product.shippingInformation}
        </div>

        {/* Add To Cart */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2874f0] py-3 font-bold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

        {/* Deal */}
        <div className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-orange-500">
          <Zap size={14} fill="currentColor" />
          Limited time deal
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
