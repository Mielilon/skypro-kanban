import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./Global.styled.js";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { UserProvider } from "./contexts/UserContext.jsx";
import { TasksProvider } from "./contexts/TasksContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <TasksProvider>
          <App />
        </TasksProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
