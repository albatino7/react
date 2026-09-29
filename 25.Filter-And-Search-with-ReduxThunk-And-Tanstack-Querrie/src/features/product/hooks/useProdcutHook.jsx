import { useQuery } from "@tanstack/react-query";
import { getAllProduct, getProductCategoryList } from "../api/productApi";
import { useState } from "react";

export const useGetAllProduct = () => {
  const [categoriesData, setCategoriesData] = useState("");
  const { data, isPending, error } = useQuery({
    queryKey: ["getallproduct", categoriesData],
    queryFn: () => getAllProduct(categoriesData),
  });

  console.log(categoriesData);

  return {
    data,
    isPending,
    error,
    categoriesData,
    setCategoriesData,
  };
};

export const useGetAllCategoryList = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["categorylist"],
    queryFn: getProductCategoryList,
  });

  return {
    data,
    isPending,
    error,
  };
};
