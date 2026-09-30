import React from "react";
import { useGetAllProduct, useSearchProduct } from "../../hooks/useProdcutHook";

import Loading from "../../../../shared/ui/components/Loading";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  const { data, isPending, setCategoriesData, categoriesData } =
    useGetAllProduct();

  const {
    data: searchProducts,
    searchData,
    setSearchData,
    isPending: searchPending,
  } = useSearchProduct();

  let products;

  if (searchData) {
    products = searchProducts?.products || [];
  } else {
    products = data?.products || [];
  }
  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <Filter
        setCategoriesData={setCategoriesData}
        categoriesData={categoriesData}
        searchData={searchData}
        setSearchData={setSearchData}
      />

      {/* Product Section */}
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {searchPending || isPending ? (
          <Loading />
        ) : (
          products.map((elem) => <ProductCard key={elem.id} product={elem} />)
        )}
      </div>
    </div>
  );
};

export default ProductPage;
