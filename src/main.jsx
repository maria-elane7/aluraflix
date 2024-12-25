import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { VideoProvider } from "./context/VideoContext";  // Certifique-se de que o caminho está correto
import "./styles.css";  // Se você tem esse arquivo ou se está usando um estilo embutido

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VideoProvider>
      <App />
    </VideoProvider>
  </React.StrictMode>
);
