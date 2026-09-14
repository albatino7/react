import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EcomContext } from "./context/MyEcom.jsx";

createRoot(document.getElementById("root")).render(
  <EcomContext>
    <App />
  </EcomContext>,
);
