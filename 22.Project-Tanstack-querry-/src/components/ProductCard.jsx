import React from "react";
import { ShoppingCart, Heart, Star, Truck } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden bg-green-50">
        {/* Discount */}
        <div className="absolute left-3 top-3 z-10 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">
          {product.discountPercentage}% OFF
        </div>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:bg-green-50 hover:text-red-500"
        >
          <Heart size={18} />
        </button>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-green-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="truncate text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1">
            <Star size={15} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">
              {product.rating}
            </span>
          </div>

          <span className="text-xs text-gray-400">
            {product.reviews?.length || 0} reviews
          </span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2,
            )}
          </span>
        </div>

        {/* Stock */}
        <div className="mt-3 flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0 ? `${product.stock} items left` : "Out of Stock"}
          </span>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Truck size={14} />
            <span>3-5 days</span>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          disabled={product.stock === 0}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          <ShoppingCart size={18} />
          {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
