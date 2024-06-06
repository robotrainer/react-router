import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";

import App from "./components/app/App.jsx";

import AuthProvider from "./components/app/providers/auth/index.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
