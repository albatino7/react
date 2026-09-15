import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartProduct, setCartItems] = useState([]);

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((elem) => elem.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((elem) =>
        elem.id === id ? { ...elem, quantity: elem.quantity + 1 } : elem,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((elem) =>
          elem.id === id ? { ...elem, quantity: elem.quantity - 1 } : elem,
        )
        .filter((elem) => elem.quantity > 0),
    );
  };

  return (
    <MyStore.Provider
      value={{
        productData,
        setProductData,
        cartProduct,
        setCartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
