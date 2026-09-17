import React, { useEffect, useContext } from "react";
import { axisoInstance } from "../config/Axios";
import { MyStore } from "../context/MyStore";
import ProductCard from "../components/ProductCard";
const ProductPage = () => {
  const { productData, setProductData } = useContext(MyStore);
  // console.log(productData);
  const getProduct = async () => {
    const response = await axisoInstance.get("/products");
    console.log("this is res", response.data);
    setProductData(response.data);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="flex flex-wrap gap-6 p-6 justify-center">
      {productData.map((elem) => (
        <ProductCard key={elem.id} product={elem} />
      ))}
    </div>
  );
};

export default ProductPage;
