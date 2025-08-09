import React, { StrictMode } from "react";
import {createRoot, ReactDOM } from "react-dom/client";
import "./index.css";
import "./styles/global.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
