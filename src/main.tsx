import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="1063862703184-cenlfhoq5oehjml9e20udsg18lb3eo03.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
        <ToastContainer
          position="bottom-right" // 👈 This places the toast at the bottom right
          autoClose={3000} // Auto close after 3 seconds
        />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
