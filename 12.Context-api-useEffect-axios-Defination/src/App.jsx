import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "./components/Home";
import Product from "./components/Product.jsx";

const App = () => {
  console.log("App is Rendering");
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState();
  console.log(products);
  const handleRequest = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log(response);
    setProducts(response.data);
  };

  useEffect(() => {
    console.log("This run in App ");
    handleRequest();
  }, [toggle]);
  return (
    <>
      <h1>App component</h1>

      {toggle ? <Home /> : <Product />}

      <button onClick={() => setToggle((prev) => !prev)}>
        Increase Toggle
      </button>
    </>
  );
};

export default App;
