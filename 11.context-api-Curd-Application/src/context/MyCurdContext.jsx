import { Children, createContext, useState } from "react";

export let MyCurdStore = createContext();

export const MyCurdContext = ({ children }) => {
  const [toggleData, setToggleData] = useState(true);
  const [cardData, setCardData] = useState({});
  const [productData, setProductData] = useState([]);
  const [updatedData, setUpdatedData] = useState(null);

  return (
    <MyCurdStore.Provider
      value={{
        toggleData,
        setToggleData,
        cardData,
        setCardData,
        productData,
        setProductData,
        updatedData,
        setUpdatedData,
      }}
    >
      {children}
    </MyCurdStore.Provider>
  );
};
