import React from "react";
import "./styles/global.css";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
