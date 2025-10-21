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
        <GoogleOAuthProvider clientId="67263510917-82k5nv1l76mlp18jlrle1esipeb2i1ti.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
        <ToastContainer />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
