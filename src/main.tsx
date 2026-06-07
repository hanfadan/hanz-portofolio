import React from "react";
import { createRoot } from "react-dom/client";
import PortfolioPage from "./components/portfolio/PortfolioPage";
import "./app/globals.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PortfolioPage />
  </React.StrictMode>,
);
