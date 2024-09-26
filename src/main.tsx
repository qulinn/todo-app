import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App"; // デフォルトインポートとして修正
import "./index.css";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
