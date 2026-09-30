import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllProducts } from "../api/getAllProduct";
import ProductCard from "../components/ProductCard";

const Pagination = () => {
  let limit = 10;
  const [pageData, setPageData] = useState(0);

  const { data, isPending, isPlaceholderData } = useQuery({
    queryKey: ["product", pageData],
    queryFn: () => getAllProducts(limit, pageData),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  if (isPending) return <h1>Loading...</h1>;
  let totalpage = Math.ceil(data.total / limit);

  //   console.log(data);
  //   console.log(pageData);
  return (
    <>
      {/* Products */}
      <div
        className={`mx-auto flex max-w-7xl flex-wrap justify-center gap-5 px-4 py-8 transition-opacity duration-200 ${
          isPlaceholderData ? "opacity-50" : "opacity-100"
        }`}
      >
        {data?.products?.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-4 pb-10">
        <button
          disabled={pageData === 0}
          onClick={() => setPageData(pageData - 1)}
          className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-[#2874f0] hover:text-[#2874f0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Prev
        </button>

        <div className="flex h-10 min-w-10 items-center justify-center rounded-xl bg-[#2874f0] px-4 text-sm font-bold text-white shadow-md">
          {pageData + 1}
        </div>

        <button
          disabled={pageData >= totalpage - 1}
          onClick={() => setPageData(pageData + 1)}
          className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-[#2874f0] hover:text-[#2874f0] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next →
        </button>
      </div>
    </>
  );
};

export default Pagination;
