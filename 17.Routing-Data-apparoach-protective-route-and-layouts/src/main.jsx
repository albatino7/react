import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoute from "./routes/AuthRoute.jsx";
import { ContextProvider } from "./context/MyStore.jsx";
import { ToastContainer, toast } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ToastContainer />
    <AppRoute />
  </ContextProvider>,
);
