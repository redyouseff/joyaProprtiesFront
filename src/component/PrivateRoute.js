import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check if the token exists in localStorage
  const token = localStorage.getItem("token");

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // If the token exists, render the child routes
  return <Outlet />;
};

export default PrivateRoute;
