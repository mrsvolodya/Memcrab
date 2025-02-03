import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { StoreProvider } from "./store/StoreProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
