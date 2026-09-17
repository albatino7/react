import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginUser")) || null,
  );
  const [registerData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );

  const [productData, setProductData] = useState([]);
  const [userData, setUserData] = useState([]);
  return (
    <MyStore.Provider
      value={{
        setUserData,
        loginData,
        setLoginData,
        registerData,
        setRegisterData,
        productData,
        setProductData,
        userData,
        setUserData,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
