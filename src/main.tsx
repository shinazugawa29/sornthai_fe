import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
