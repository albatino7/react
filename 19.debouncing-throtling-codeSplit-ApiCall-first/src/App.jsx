import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  let throttle = false;

  // Get all products
  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");

    setProductData(res.data);
    setSearchData(res.data);
  };

  // Search products
  const findPorducts = () => {
    const filterResult = productData.filter((val) => {
      return val.title.toLowerCase().includes(inputData.toLowerCase());
    });

    console.log("find product fun :::____--", filterResult);

    setSearchData(filterResult);
  };

  // Debouncing for searchProduct
  useEffect(() => {
    if (inputData.length === 0) {
      setSearchData(productData);
      return;
    }

    const time = setTimeout(() => {
      findPorducts();
    }, 300);

    return () => clearTimeout(time);
  }, [inputData]);

  // Throttling
  useEffect(() => {
    const handleScroll = () => {
      if (throttle) return;

      throttle = true;

      console.log("scroll triggered...");
      setScrollY(window.scrollY);

      console.log(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Get products
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Search Section */}
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold text-slate-900">
            Find your product
          </h2>

          <p className="mb-5 text-slate-500">Search products by their name</p>

          <div className="relative max-w-2xl">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </span>

            <input
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
              type="text"
              placeholder="Search products..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-5 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            {inputData && (
              <button
                onClick={() => setInputData("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-100 px-2 py-1 text-sm text-slate-500 hover:bg-slate-200"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Search Result Info */}
        {inputData && (
          <div className="mb-5">
            <p className="text-sm text-slate-500">
              Search result for{" "}
              <span className="font-semibold text-slate-800">
                "{inputData}"
              </span>
            </p>
          </div>
        )}

        {/* Products */}
        {searchData.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {searchData.map((elem) => {
              return (
                <div
                  key={elem.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="flex h-64 items-center justify-center bg-white p-6">
                    <img
                      src={elem.image}
                      alt={elem.title}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Details */}
                  <div className="border-t border-slate-100 p-5">
                    {/* Category */}
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {elem.category}
                    </p>

                    {/* Title */}
                    <h3 className="mb-3 line-clamp-2 min-h-[48px] text-lg font-semibold text-slate-900">
                      {elem.title}
                    </h3>

                    {/* Rating */}
                    <div className="mb-4 flex items-center gap-2">
                      <span className="rounded-lg bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
                        ⭐ {elem.rating.rate}
                      </span>

                      <span className="text-sm text-slate-400">
                        ({elem.rating.count} reviews)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-bold text-slate-900">
                        ${elem.price}
                      </p>

                      <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* No result */
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-white">
            <div className="mb-3 text-5xl">🔍</div>

            <h3 className="text-xl font-semibold text-slate-800">
              No products found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try searching with another product name.
            </p>
          </div>
        )}

        {/* Scroll value - only for learning throttle */}
        <div className="mt-10 rounded-xl bg-slate-900 p-4 text-center text-sm text-white">
          Scroll Position:{" "}
          <span className="font-bold text-blue-400">{scrollY}px</span>
        </div>
      </main>
    </div>
  );
};

export default App;
