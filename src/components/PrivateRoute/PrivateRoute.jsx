import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const auth = true;
  return auth ? children : <Navigate to="/login" />;
};
