import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyCurdContext } from "./context/MyCurdContext.jsx";

createRoot(document.getElementById("root")).render(
  <MyCurdContext>
    <App />
  </MyCurdContext>,
);
