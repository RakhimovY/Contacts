import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";
import "./firebase";
import store from "./core/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <StyledEngineProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </Provider>
);
