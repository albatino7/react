import React, { useState } from "react";
import { Search, Filter as FilterIcon, ChevronDown } from "lucide-react";

import { useGetAllCategoryList } from "../../hooks/useProdcutHook";
const Filter = ({ setCategoriesData, categoriesData }) => {
  const { data } = useGetAllCategoryList();
  //   console.log(data);

  return (
    <div className="w-full px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#2874f0] focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Category */}
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <FilterIcon size={18} className="text-[#2874f0]" />
            <span>Category</span>
          </div>

          <div className="relative w-full sm:w-56">
            <select
              onChange={(e) => setCategoriesData(e.target.value)}
              value={categoriesData}
              className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 pr-10 text-sm font-medium text-gray-700 outline-none transition-all duration-300 focus:border-[#2874f0] focus:bg-white focus:ring-2 focus:ring-blue-100"
            >
              <option value="">All Categories</option>

              {data?.map((elem, index) => (
                <option key={index} value={elem.slug}>
                  {elem.slug}
                </option>
              ))}
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
