import { useState } from "react";
import { getAllProducts } from "../api/GetProductApi";
import { useEffect } from "react";

export const useProductForHomePage = () => {
  const [productData, setProductData] = useState([]);
  const [filterProductData, setFilterProduct] = useState([]);

  //   console.log(filterProductData);
  const filterProduct = (searchParam) => {
    console.log(searchParam);
    const filterResult = productData.filter((elem) => {
      return elem.title.toLowerCase().includes(searchParam.toLowerCase());
    });
    // console.log(filterResult);
    if (filterResult) {
      setFilterProduct(filterResult);
    }
  };

  const getProudctData = async () => {
    const res = await getAllProducts();
    console.log(res);
    setProductData(res);
    setFilterProduct(res);
  };

  useEffect(() => {
    getProudctData();
  }, []);
  return {
    getAllProducts,
    productData,
    setProductData,
    getProudctData,
    filterProduct,
    filterProductData,
    setFilterProduct,
  };
};
