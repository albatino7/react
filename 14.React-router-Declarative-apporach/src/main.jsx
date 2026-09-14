import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { StoreContext } from "./context/MyStore.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContext>
      <App />
    </StoreContext>
  </BrowserRouter>,
);
