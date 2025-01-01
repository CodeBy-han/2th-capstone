import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./GlobalStyle.css";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
