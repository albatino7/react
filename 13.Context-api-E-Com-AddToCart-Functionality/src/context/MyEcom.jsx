import { createContext, useState } from "react";

export const MyStore = createContext();

export const EcomContext = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [toggleData, setToggleData] = useState(true);
  const [cartItem, setCartItems] = useState([]);

  // console.log(cartItem);

  const increaseCartItem = (id) => {
    setCartItems((prev) =>
      prev.map((elem) => {
        return elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem;
      }),
    );
  };

  const decreaseCartItem = (id) => {
    setCartItems((prev) =>
      prev
        .map((elem) => {
          return elem.id === id
            ? { ...elem, quantity: elem.quantity - 1 }
            : elem;
        })
        .filter((elem) => elem.quantity > 0),
    );
  };

  const removeCartItem = (id) => {
    setCartItems((prev) => prev.filter((elem) => elem.id !== id));
  };

  return (
    <MyStore.Provider
      value={{
        productData,
        setProductData,
        toggleData,
        setToggleData,
        cartItem,
        setCartItems,
        increaseCartItem,
        decreaseCartItem,
        removeCartItem,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
