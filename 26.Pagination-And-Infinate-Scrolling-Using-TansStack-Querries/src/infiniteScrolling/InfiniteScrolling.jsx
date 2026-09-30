import React from "react";

import { useInfiniteQuery } from "@tanstack/react-query";
import { infinteScroll } from "../api/getAllproductInfiniteScrolll";
import ProductCard from "../components/ProductCard";

const InfiniteScrolling = () => {
  let limit = 40;

  const { data, isPending, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["infinite"],
      queryFn: ({ pageParam }) => {
        return infinteScroll(limit, pageParam);
      },
      initialPageParam: 0,

      getNextPageParam: (lastPage, allPage) => {
        const loadedData = allPage.length * limit;

        if (loadedData < lastPage.total) return loadedData;
        return undefined;
      },
    });

  if (isPending) {
    return <div className="py-10 text-center text-xl">Loading.....</div>;
  }

  if (error) {
    return (
      <div className="py-10 text-center text-red-500">Something went wrong</div>
    );
  }

  const allData = data?.pages.flatMap((val) => val.products) ?? [];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      {/* Product Cards */}
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-6">
        {allData.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center py-10">
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default InfiniteScrolling;
