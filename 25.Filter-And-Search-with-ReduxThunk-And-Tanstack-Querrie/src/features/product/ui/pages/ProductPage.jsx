import React from "react";
import {
  useGetAllProduct,
  useGetAllCategoryList,
} from "../../hooks/useProdcutHook";
import Loading from "../../../../shared/ui/components/Loading";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  const { data, isPending, error, setCategoriesData, categoriesData } =
    useGetAllProduct();

  // const { data: productByCategory } = useGetAllCategoryList();

  // let products;

  // if (categoriesData) {
  //   products = productByCategory?.products || [];
  // } else {
  //   products = data?.products || [];
  // }

  if (isPending) return <Loading />;

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <Filter
        setCategoriesData={setCategoriesData}
        categoriesData={categoriesData}
      />
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-5">
        {data.products.map((elem) => {
          return <ProductCard key={elem.id} product={elem} />;
        })}
      </div>
    </div>
  );
};

export default ProductPage;
