import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes.jsx";
import StateContextProvider from "./StateContext/StateContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContextProvider>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </StateContextProvider>
  </React.StrictMode>
);
