import { useQuery } from "@tanstack/react-query";
import {
  getAllProduct,
  getProductCategoryList,
  getSeacrhProductApi,
} from "../api/productApi";
import { useEffect, useState } from "react";

export const useGetAllProduct = () => {
  const [categoriesData, setCategoriesData] = useState("");

  const { data, isPending, error } = useQuery({
    queryKey: ["getallproduct", categoriesData],
    queryFn: () => getAllProduct(categoriesData),
  });

  // console.log(categoriesData);

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

export const useSearchProduct = () => {
  const [searchData, setSearchData] = useState("");

  const [debounceData, setDebounceData] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounceData(searchData);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [searchData]);

  const { data, error, isPending } = useQuery({
    queryKey: ["searchProduct", debounceData],
    queryFn: () => getSeacrhProductApi(debounceData),
  });

  return {
    data,
    error,
    isPending,
    searchData,
    setSearchData,
  };
};
