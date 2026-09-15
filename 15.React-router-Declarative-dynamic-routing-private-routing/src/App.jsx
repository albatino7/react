import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
