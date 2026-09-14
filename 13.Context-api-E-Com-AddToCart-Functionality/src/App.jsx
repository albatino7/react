import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { MyStore } from "./context/MyEcom.jsx";

import axios from "axios";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";

const App = () => {
  const { setProductData, productData, toggleData, cartItem } =
    useContext(MyStore);
  console.log("productData=> ", productData); //checking product Data

  //fetching Data from FakeStore
  const getProductData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    // console.log(response);

    //insert reposne data into setProductData
    setProductData(response.data);
  };

  //using useEffect for calling  getProductoneTime
  useEffect(() => {
    getProductData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {toggleData ? (
          productData.map((elem) => {
            let isInCart = cartItem.find((value) => {
              return value.id === elem.id;
            });
            return (
              <ProductCard key={elem.id} product={elem} isInCart={isInCart} />
            );
          })
        ) : (
          <Cart />
        )}
      </div>
    </>
  );
};

export default App;
