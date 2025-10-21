import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    // Not logged in → redirect to login
    return <Navigate to="/" replace />;
  }

  // Logged in → render child route
  return <Outlet />;
};

export default ProtectedRoute;
