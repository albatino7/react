import React, { useEffect, useContext, useState } from "react";
import { axisoInstance } from "../config/Axios";
import { MyStore } from "../context/MyStore";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
const ProductPage = () => {
  const { productData, setProductData } = useContext(MyStore);
  const [isLoading, setISLoading] = useState(true);
  // console.log(productData);
  const getProduct = async () => {
    const response = await axisoInstance.get("/products");
    console.log("this is res", response.data);
    setProductData(response.data);
    setISLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {productData.map((elem) => (
        <ProductCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default ProductPage;
