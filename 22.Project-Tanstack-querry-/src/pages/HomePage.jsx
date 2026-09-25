import React from "react";
import { useNavigate } from "react-router";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
import { useProductForHomePage } from "../hooks/productPageHook.jsx";

const HomePage = () => {
  const { productData, filterProductData, filterProduct } =
    useProductForHomePage();

  return (
    <div className="min-h-screen bg-green-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        {/* Filter */}
        <div className="mb-8 w-full">
          <Filter filterProduct={filterProduct} />
        </div>

        {/* Products */}
        <div className="flex flex-wrap items-stretch justify-center gap-6">
          {filterProductData.map((elem) => {
            return <ProductCard key={elem.id} product={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
