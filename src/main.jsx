import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import "./assets/css/app.css"; // Import the Tailwind CSS
import "milligram/dist/milligram.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
