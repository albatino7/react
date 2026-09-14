import { createContext, useState } from "react";

export const MyStore = createContext();

export const StoreContext = ({ children }) => {
  const [data, setData] = useState("hello");

  return (
    <MyStore.Provider value={{ data, setData }}>{children}</MyStore.Provider>
  );
};
