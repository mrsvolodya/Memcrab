import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TableProvider } from "./store/TableProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <TableProvider>
    <App />
  </TableProvider>
);
