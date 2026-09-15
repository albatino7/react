import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  ArrowLeft,
  ShoppingCart,
  Star,
  Heart,
  Truck,
  ShieldCheck,
} from "lucide-react";

const ProductDetailCard = () => {
  const { id } = useParams();

  const [singleProductData, setSingleProductData] = useState({});

  const getSingleProductDetail = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

    console.log(res);
    setSingleProductData(res.data);
  };

  useEffect(() => {
    getSingleProductDetail();
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Main Container */}
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mb-6 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100"
        >
          <ArrowLeft size={18} />
          Back
        </button>

        {/* Product Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative flex min-h-[450px] items-center justify-center bg-gray-50 p-10">
              {/* Wishlist */}
              <button className="absolute right-6 top-6 rounded-full border border-gray-200 bg-white p-3 text-gray-600 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-500">
                <Heart size={22} />
              </button>

              <img
                src={singleProductData.image}
                alt={singleProductData.title}
                className="h-[380px] w-full object-contain transition duration-300 hover:scale-105"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              {/* Category */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                {singleProductData.category}
              </p>

              {/* Title */}
              <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                {singleProductData.title}
              </h1>

              {/* Rating */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-3 py-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />

                  <span className="font-semibold text-gray-700">
                    {singleProductData.rating?.rate}
                  </span>
                </div>

                <span className="text-sm text-gray-500">
                  {singleProductData.rating?.count} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="mb-1 text-sm text-gray-400">Price</p>

                <p className="text-4xl font-bold text-gray-900">
                  ${singleProductData.price}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  Description
                </h3>

                <p className="leading-7 text-gray-600">
                  {singleProductData.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                  <Truck className="text-blue-600" size={22} />

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Fast Delivery
                    </p>

                    <p className="text-xs text-gray-500">
                      Quick & secure shipping
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl bg-gray-50 p-4">
                  <ShieldCheck className="text-green-600" size={22} />

                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Secure Purchase
                    </p>

                    <p className="text-xs text-gray-500">
                      Safe & trusted product
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  className="
                    flex flex-1 items-center justify-center
                    gap-2 rounded-xl bg-blue-600
                    px-6 py-4 font-semibold text-white
                    transition duration-200
                    hover:bg-blue-700
                    active:scale-95
                  "
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button
                  className="
                    rounded-xl border border-gray-300
                    bg-white px-6 py-4
                    font-semibold text-gray-800
                    transition duration-200
                    hover:bg-gray-100
                    active:scale-95
                  "
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
