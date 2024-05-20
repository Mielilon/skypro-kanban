import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./Global.styled.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
