import React, { useEffect, useState } from "react";
import {
  Search,
  ShoppingCart,
  Star,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  Zap,
  Package,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { axisoInstance } from "../../../config/axiosInstance";

const Homepage = () => {
  // =========================
  // STATES
  // =========================

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [searchData, setSearchData] = useState("");
  const [category, setCategory] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // GET PRODUCTS API
  // =========================

  const getProducts = async () => {
    try {
      setIsLoading(true);
      setError("");

      let url = "/products";

      if (category) {
        url = `/products/category/${category}`;
      }

      if (searchData.trim()) {
        url = `/products/search?q=${searchData}`;
      }

      const response = await axisoInstance.get(url);

      setProducts(response.data.products || []);
    } catch (error) {
      console.log(error);

      setError("Something went wrong while loading products.");
    } finally {
      setIsLoading(false);
    }
  };

  // =========================
  // GET CATEGORIES API
  // =========================

  const getCategories = async () => {
    try {
      const response = await axisoInstance.get("/products/categories");

      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // USE EFFECT
  // =========================

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchData, category]);

  // =========================
  // CATEGORY CHANGE
  // =========================

  const handleCategoryChange = (value) => {
    setCategory(value);
    setSearchData("");
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-gray-900">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2874f0] via-[#2168dd] to-[#174ea6]">
        {/* Background decoration */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:justify-between lg:py-20">
          {/* Hero Content */}

          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles size={16} />
              New Shopping Experience
            </div>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Everything You
              <span className="block text-cyan-200">Want. In One Place.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-blue-100 sm:text-lg">
              Discover amazing products, exciting deals and everyday essentials
              with a simple and smooth shopping experience.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#2874f0] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Shop Now
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20">
                <Zap size={18} />
                Today's Deals
              </button>
            </div>
          </div>

          {/* Hero Product Box */}

          <div className="relative hidden w-full max-w-md lg:block">
            <div className="animate-pulse rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl">
              <div className="rounded-2xl bg-white p-8 shadow-2xl">
                <div className="flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                  <Package size={110} className="text-[#2874f0]" />
                </div>

                <div className="mt-5">
                  <p className="text-sm text-gray-400">Featured Collection</p>

                  <h3 className="mt-1 text-2xl font-bold">Smart Shopping</h3>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-black text-[#2874f0]">
                      Up to 50% OFF
                    </span>

                    <div className="rounded-full bg-yellow-100 p-3 text-yellow-600">
                      <Zap size={22} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE FEATURES
      ====================================================== */}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center">
          <div className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-5 sm:w-1/2 sm:border-r lg:w-1/4 lg:border-b-0">
            <div className="rounded-xl bg-blue-50 p-3 text-[#2874f0]">
              <Truck size={22} />
            </div>

            <div>
              <h3 className="font-bold">Fast Delivery</h3>
              <p className="text-sm text-gray-500">Quick & reliable</p>
            </div>
          </div>

          <div className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-5 sm:w-1/2 lg:w-1/4 lg:border-b-0 lg:border-r">
            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h3 className="font-bold">Secure Payment</h3>
              <p className="text-sm text-gray-500">100% protected</p>
            </div>
          </div>

          <div className="flex w-full items-center gap-4 border-b border-gray-100 px-5 py-5 sm:w-1/2 sm:border-r lg:w-1/4 lg:border-b-0">
            <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
              <RotateCcw size={22} />
            </div>

            <div>
              <h3 className="font-bold">Easy Returns</h3>
              <p className="text-sm text-gray-500">Simple process</p>
            </div>
          </div>

          <div className="flex w-full items-center gap-4 px-5 py-5 sm:w-1/2 lg:w-1/4">
            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Package size={22} />
            </div>

            <div>
              <h3 className="font-bold">Quality Products</h3>
              <p className="text-sm text-gray-500">Made for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH + CATEGORY
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row">
          {/* Search */}

          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-[#2874f0] focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Category */}

          <div className="relative md:w-64">
            <select
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 pr-10 font-medium outline-none transition focus:border-[#2874f0] focus:bg-white focus:ring-4 focus:ring-blue-100"
            >
              <option value="">All Categories</option>

              {categories.map((item, index) => (
                <option
                  key={index}
                  value={typeof item === "string" ? item : item.slug}
                >
                  {typeof item === "string" ? item : item.name}
                </option>
              ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#2874f0]">
              Explore
            </p>

            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Shop by Category
            </h2>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-3">
          {categories.slice(0, 8).map((item, index) => {
            const categoryName = typeof item === "string" ? item : item.name;

            const categorySlug = typeof item === "string" ? item : item.slug;

            return (
              <button
                key={index}
                onClick={() => handleCategoryChange(categorySlug)}
                className="group min-w-[150px] rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2874f0] hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2874f0] transition group-hover:bg-[#2874f0] group-hover:text-white">
                  <Package size={24} />
                </div>

                <h3 className="line-clamp-1 font-bold capitalize">
                  {categoryName}
                </h3>

                <p className="mt-1 text-xs text-gray-400">Explore products</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          OFFER BANNER
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-10 sm:px-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <div className="mb-3 flex items-center gap-2 text-yellow-400">
                <Zap size={20} fill="currentColor" />
                <span className="font-bold">LIMITED TIME OFFER</span>
              </div>

              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Big Deals. Small Prices.
              </h2>

              <p className="mt-2 text-gray-400">
                Grab your favorite products before the deal disappears.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-[#2874f0] px-6 py-3.5 font-bold text-white transition hover:bg-blue-500 hover:shadow-lg">
              Explore Deals
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#2874f0]">
              For You
            </p>

            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              Trending Products
            </h2>
          </div>

          <span className="text-sm text-gray-500">
            {products.length} products found
          </span>
        </div>

        {/* Loading */}

        {isLoading && (
          <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white">
            <div className="text-center">
              <div className="flex justify-center gap-2">
                <span className="h-3 w-3 animate-bounce rounded-full bg-[#2874f0]" />
                <span className="h-3 w-3 animate-bounce rounded-full bg-[#2874f0] [animation-delay:-0.15s]" />
                <span className="h-3 w-3 animate-bounce rounded-full bg-[#2874f0] [animation-delay:-0.3s]" />
              </div>

              <p className="mt-4 text-sm text-gray-500">Loading products...</p>
            </div>
          </div>
        )}

        {/* Error */}

        {!isLoading && error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
            <p className="font-semibold text-red-600">{error}</p>
          </div>
        )}

        {/* Product Cards */}

        {!isLoading && !error && (
          <div className="flex flex-wrap justify-center gap-5">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:w-[45%] lg:w-[30%] xl:w-[23%]"
              >
                {/* Image */}

                <div className="relative overflow-hidden bg-gray-50 p-4">
                  {product.discountPercentage && (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}

                  <button className="absolute right-3 top-3 z-10 rounded-full bg-white p-2.5 text-gray-500 shadow-md transition hover:bg-red-50 hover:text-red-500">
                    <Heart size={17} />
                  </button>

                  <img
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                    className="h-52 w-full object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase text-gray-400">
                      {product.brand || product.category}
                    </span>

                    <div className="flex items-center gap-1 rounded-md bg-green-50 px-2 py-1 text-xs font-bold text-green-600">
                      <Star size={12} fill="currentColor" />
                      {product.rating}
                    </div>
                  </div>

                  <h3 className="mt-2 line-clamp-2 min-h-[48px] text-base font-bold transition group-hover:text-[#2874f0]">
                    {product.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-black text-gray-900">
                        ${product.price}
                      </p>

                      {product.discountPercentage && (
                        <p className="text-xs text-gray-400 line-through">
                          $
                          {(
                            product.price /
                            (1 - product.discountPercentage / 100)
                          ).toFixed(0)}
                        </p>
                      )}
                    </div>

                    <span className="text-xs font-semibold text-green-600">
                      {product.stock} left
                    </span>
                  </div>

                  <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2874f0] py-3 font-bold text-white transition duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95">
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}

        {!isLoading && !error && products.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center">
            <Package size={50} className="mx-auto text-gray-300" />

            <h3 className="mt-4 text-xl font-bold">No Products Found</h3>

            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </section>

      {/* =====================================================
          WHY SHOPKART
      ====================================================== */}

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#2874f0]">
              Why ShopKart
            </p>

            <h2 className="mt-2 text-3xl font-black">Shopping Made Simple</h2>

            <p className="mt-3 text-gray-500">
              Everything you need for a smooth and enjoyable online shopping
              experience.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Shopping",
                text: "Your shopping experience stays protected.",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                text: "Get your products delivered quickly.",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                text: "Simple and convenient return experience.",
              },
              {
                icon: Star,
                title: "Quality Products",
                text: "Discover products for your everyday needs.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="w-full rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:w-[45%] lg:w-[22%]"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2874f0]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-4 font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER CTA
      ====================================================== */}

      <section className="bg-[#2874f0] px-4 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-black text-white">
              Ready to Start Shopping?
            </h2>

            <p className="mt-2 text-blue-100">
              Find something you love and make it yours.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-[#2874f0] shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
            Start Shopping
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
