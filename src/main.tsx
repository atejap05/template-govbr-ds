import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// GovBR-DS Estilos
import "@govbr-ds/core/dist/core-tokens.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// Estilos locais
import "./styles/govbr.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
