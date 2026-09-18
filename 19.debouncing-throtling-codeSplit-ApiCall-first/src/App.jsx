import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productData, setProductData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [scrollY, setScrollY] = useState([]);

  let throttle = false;
  // console.log(productData);
  const getAllProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    // console.log(res.data);
    setProductData(res.data);
    setSearchData(res.data);
  };

  const findPorducts = () => {
    const filterResult = productData.filter((val) => {
      return val.title.toLowerCase().includes(inputData.toLocaleLowerCase());
    });
    console.log("find product fun :::____--", filterResult);
    setSearchData(filterResult);
  };
  //debouncing for searchProduct
  useEffect(() => {
    // if (!inputData) return;
    if (inputData.length === 0) {
      setSearchData(productData);
      return;
    }

    const time = setTimeout(() => {
      findPorducts();
    }, 300);
    return () => clearTimeout(time);
  }, [inputData]);

  //throtling
  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      console.log("scroll triggered...");
      setScrollY(window.scrollY);
      console.log(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setInputData(e.target.value);
          }}
          type="text"
          placeholder="Search products"
        />
      </div>

      {searchData.map((elem) => {
        return <h1 key={elem.id}>{elem.title}</h1>;
      })}
    </div>
  );
};

export default App;
