import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-slate-200">
      {/* Product Image */}
      <div className="h-64 bg-slate-50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        {/* Category */}
        <p className="text-xs uppercase tracking-wide text-indigo-600 font-semibold mb-2">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-bold text-slate-800 line-clamp-2 min-h-14">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md">
            <Star size={15} fill="currentColor" />
            <span className="text-sm font-semibold">
              {product.rating?.rate}
            </span>
          </div>

          <span className="text-sm text-slate-500">
            ({product.rating?.count} reviews)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <p className="text-xs text-slate-500">Price</p>
            <p className="text-2xl font-bold text-slate-900">
              ${product.price}
            </p>
          </div>

          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-xl font-semibold transition">
            <ShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
