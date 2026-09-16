import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [RegisterData, setRegisterData] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );
  const [loginData, setLoginData] = useState(
    JSON.parse(localStorage.getItem("loginUser") || null),
  );

  console.log(RegisterData);

  return (
    <MyStore.Provider
      value={{
        loginData,
        setLoginData,
        RegisterData,
        setRegisterData,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
