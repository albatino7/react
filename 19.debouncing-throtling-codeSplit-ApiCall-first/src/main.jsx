import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Sir from "./Sir.jsx";
import AuthRoute from "./routes/AuthRoute.jsx";

createRoot(document.getElementById("root")).render(<AuthRoute />);
