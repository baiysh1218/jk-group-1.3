import React from "react";
import ReactDOM from "react-dom/client";
import { I18nContext } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PageContextProvider from "./contexts/PageContext/PageContext";
// import i18n from "./language/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter forceRefresh={true}>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </BrowserRouter>
);
