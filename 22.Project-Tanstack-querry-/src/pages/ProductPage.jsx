import React from "react";
import ProductCard from "../components/ProductCard.jsx";

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/GetProductApi.jsx";

const ProductPage = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 5000,
  });

  if (isPending) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Filter */}
        <div className="mb-8 w-full">{/* <Filter /> */}</div>

        {/* Products */}
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {data.map((elem) => {
            return <ProductCard key={elem.id} product={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
