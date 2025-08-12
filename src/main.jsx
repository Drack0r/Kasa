import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router.jsx";
import { BrowserRouter } from "react-router-dom";
import "/src/assets/styles/main.scss";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
