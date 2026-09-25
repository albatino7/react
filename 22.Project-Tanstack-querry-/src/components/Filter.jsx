import React from "react";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState } from "react";

// import { useProductForHomePage } from "../hooks/productPageHook";

const Filter = ({ filterProduct }) => {
  //   const { setInputData, filterProduct } = useProductPage();
  const [searchInput, setSearchInput] = useState("");
  const FilterButton = () => {
    filterProduct(searchInput);
  };
  return (
    <div className="mb-8 rounded-2xl border border-green-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="flex w-full max-w-xl items-center gap-2">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              onChange={(e) => filterProduct(e.target.value)}
              //   onChange={(e) => setSearchInput(e.target.value)}
              type="text"
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            onClick={FilterButton}
            type="button"
            className="flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            <Search size={17} />
            Search
          </button>
        </div>

        {/* Category */}
        <div className="flex w-full items-center gap-3 lg:w-auto">
          <div className="flex items-center gap-2 text-gray-600">
            <SlidersHorizontal size={19} className="text-green-600" />

            <span className="whitespace-nowrap text-sm font-medium">
              Category
            </span>
          </div>

          <div className="relative w-full lg:w-48">
            <select
              className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-sm text-gray-700 outline-none transition focus:border-green-400 focus:bg-white focus:ring-2 focus:ring-green-100"
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="groceries">Groceries</option>
              <option value="beauty">Beauty</option>
              <option value="furniture">Furniture</option>
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
