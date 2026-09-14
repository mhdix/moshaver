import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { Toaster } from "react-hot-toast";
import { UsersProvider } from "./context/usersContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <UsersProvider>
        <BrowserRouter>
          <Toaster />
          <App />
        </BrowserRouter>
      </UsersProvider>
    </AuthProvider>
  </StrictMode>,
);
