import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppFormProvider from "./context/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppFormProvider>
      <App />
    </AppFormProvider>
  </React.StrictMode>
);
