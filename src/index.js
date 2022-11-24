import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
// Jetbrains font imported
import "@fontsource/jetbrains-mono";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
