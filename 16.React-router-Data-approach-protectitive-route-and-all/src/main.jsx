import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoute from "./Routes/AppRoute.jsx";
import { ContextProvider } from "./context/MyStore.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <AppRoute />
    <ToastContainer />
  </ContextProvider>,
);
