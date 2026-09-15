import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyStore";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const { productData, setProductData, cartProduct, setCartItems } =
    useContext(MyStore);
  // console.log(productData);
  const getAllProductData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response);
    setProductData(response.data);
  };

  useEffect(() => {
    getAllProductData();
  }, []);
  return (
    <div className="flex  flex-wrap gap-5 items-center justify-center">
      {productData.map((elem) => {
        let isInCart = cartProduct.some((prod) => prod.id == elem.id);
        return <ProductCard product={elem} isInCart={isInCart} />;
      })}
    </div>
  );
};

export default Home;
