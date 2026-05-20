import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { MotionConfig } from "framer-motion";
import { AppProvider } from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <MotionConfig viewport={{ once: true }}>
        <App />
      </MotionConfig>
    </AppProvider>
  </BrowserRouter>,
);
